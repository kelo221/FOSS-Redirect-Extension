const tedditUrl = "https://teddit.net";

let statusObject = [
    {
        enabled : true
    },
    {
        enabled : true
    },
    {
        enabled : true
    },
    {
        enabled : true
    },
]

const websiteEnum = {
    reddit: 0,
    twitter: 1,
    instagram: 2,
    youtube: 3
}

// Get Stored JSON object
const key = 'websiteSettings';
chrome.storage.local.get([key], (result) => {
    statusObject = result.websiteSettings.name ? result.websiteSettings.name : statusObject
});

// Add listener for UI changes
chrome.runtime.onConnect.addListener(function(port) {
    // Send the stored values
    port.postMessage(statusObject);

    // Receive new values from the UI
    port.onMessage.addListener(function(msg) {
        statusObject = msg

        // Store values in storage
        chrome.storage.local.set({key: msg}, () => {
            console.log('Stored name: ' + value.name);
        });
    });
})

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        const url = new URL(details.url);

        return {redirectUrl: tedditUrl + url.pathname + url.search + url.hash};
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
