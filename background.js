const tedditUrl = "https://teddit.net";
const bibliogramUrl = "https://bibliogram.fdn.fr"
const nitterUrl = "https://nitter.net"
const invidiousUrl = "https://yewtu.be"

let statusObject = [
    {
        enabled: false
    },
    {
        enabled: false
    },
    {
        enabled: false
    },
    {
        enabled: false
    },
]

const websiteEnum = {
    instagram: 0,
    reddit: 1,
    twitter: 2,
    youtube: 3
}

// Run when the user first installs the extension
chrome.runtime.onInstalled.addListener(() => {
    //Save the initial settings to the storage
    chrome.storage.local.set({storedSettings: JSON.stringify(statusObject)}, () => {
        if (chrome.runtime.lastError)
            console.log('Error setting');
    });
})

// Add listener for UI changes
chrome.runtime.onConnect.addListener(port => {



    chrome.storage.local.get(["storedSettings"], (result) => {
        if (chrome.runtime.lastError)
            console.log('Error getting');
        statusObject = result.storedSettings
    });

        // Receive new values from the UI
        port.onMessage.addListener(msg => {
            console.log("DATA FROM THE UI!")
            statusObject = JSON.stringify(msg)

            chrome.storage.local.set({storedSettings: statusObject}, () => {
                if (chrome.runtime.lastError)
                    console.log('Error setting');
            });
        });


    // Send the stored values
    port.postMessage(statusObject)
})

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        const url = new URL(details.url);
        let parsedObject

        try {
            parsedObject = (JSON.parse(statusObject))
        }catch (e){
            parsedObject = statusObject
        }



        if (url.host.includes("reddit") && parsedObject[websiteEnum.reddit].enabled) {
            return {
                redirectUrl: tedditUrl + url.pathname + url.search + url.hash
            };
        } else

        if (url.host.includes("twitter") && parsedObject[websiteEnum.twitter].enabled) {
            return {
                redirectUrl: nitterUrl + url.pathname + url.search + url.hash
            };
        } else

        if (url.host.includes("instagram") && parsedObject[websiteEnum.instagram].enabled) {
            return {
                redirectUrl: bibliogramUrl + url.pathname + url.search + url.hash
            };
        } else

        if (url.host.includes("youtube") && parsedObject[websiteEnum.youtube].enabled) {
            return {
                redirectUrl: invidiousUrl + url.pathname + url.search + url.hash
            };
        }

    }, {
        urls: [
            "*://old.reddit.com/*",
            "*://www.old.reddit.com/*",
            "*://reddit.com/*",
            "*://www.reddit.com/*",
            "*://np.reddit.com/*",
            "*://amp.reddit.com/*",
            "*://i.reddit.com/*",

            "*://twitter.com/*",
            "*://www.twitter.com/*",
            "*://instagram.com/*",
            "*://www.instagram.com/*",
            "*://youtube.com/*",
            "*://www.youtube.com/*",
        ],
        types: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "object",
            "xmlhttprequest",
            "other",
        ],
    },
    ["blocking"]
);