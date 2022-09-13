const tedditUrl = "https://teddit.net";
const bibliogramUrl = "https://bibliogram.fdn.fr"
const nitterUrl = "https://nitter.net"
const invidiousUrl  = "https://yewtu.be"

let statusObject = [
    {
        enabled : false
    },
    {
        enabled : false
    },
    {
        enabled : false
    },
    {
        enabled : false
    },
]

const websiteEnum = {
    instagram: 0,
    reddit: 1,
    twitter: 2,
    youtube: 3
}

// Get Stored JSON object
const key = 'websiteSettings';
chrome.storage.local.get([key], (result) => {
    if (result !== undefined) {
        statusObject = result.websiteSettings.name
    }
});

// Add listener for UI changes
chrome.runtime.onConnect.addListener(function(port) {
    // Send the stored values
    port.postMessage(statusObject);

    // Receive new values from the UI
    port.onMessage.addListener(function(msg) {

        if (typeof msg !== undefined)
        statusObject = msg

        // Store values in storage
        chrome.storage.local.set({key: msg}, () => {
        });
    });
})

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        const url = new URL(details.url);


        if (url.host.includes("reddit") && statusObject[websiteEnum.reddit].enabled){
            return {redirectUrl: tedditUrl + url.pathname + url.search + url.hash};
        }else

        if (url.host.includes("twitter") && statusObject[websiteEnum.twitter].enabled){
            return {redirectUrl: nitterUrl + url.pathname + url.search + url.hash};
        }else

        if (url.host.includes("instagram") && statusObject[websiteEnum.instagram].enabled){
            return {redirectUrl: bibliogramUrl + url.pathname + url.search + url.hash};
        }else

        if (url.host.includes("youtube") && statusObject[websiteEnum.youtube].enabled){
            return {redirectUrl: invidiousUrl + url.pathname + url.search + url.hash};
        }

    },
    {
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
