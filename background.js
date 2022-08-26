const tedditUrl = "https://teddit.net";
const redditExcludedPaths = [
    "/poll",
    "/rpan",
    "/settings",
    "/topics",
    "/community-points",
];

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        const url = new URL(details.url);

        for (const path of redditExcludedPaths) {
            if (url.pathname.indexOf(path) === 0) return;
        }

        if (url.pathname.indexOf("/gallery") === 0) {
            return {redirectUrl: tedditUrl + url.pathname.slice("/gallery".length)};
        }

        return {redirectUrl: tedditUrl + url.pathname + url.search + url.hash};
    },
    {
        urls: [
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
