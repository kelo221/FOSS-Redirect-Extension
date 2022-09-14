const port = chrome.runtime.connect({
    name: "Saved Settings Handler"
});

let statusObject = [
    {
        enabled : undefined
    },
    {
        enabled : undefined
    },
    {
        enabled : undefined
    },
    {
        enabled : undefined
    },
]

const websiteEnum = {
    instagram: 0,
    reddit: 1,
    twitter: 2,
    youtube: 3
}

port.onMessage.addListener(function(msg) {

    try {
        statusObject = (JSON.parse(msg))
    }catch (e){
        statusObject = msg
    }


    const redditContainer = document.getElementById("Reddit")
    const twitterContainer = document.getElementById("Twitter")
    const instagramContainer = document.getElementById("Instagram")
    const youtubeContainer = document.getElementById("Youtube")

    const redditContainerIcon = document.getElementById("RedditIcon")
    const twitterContainerIcon = document.getElementById("TwitterIcon")
    const instagramContainerIcon = document.getElementById("InstagramIcon")
    const youtubeContainerIcon = document.getElementById("YoutubeIcon")

    const toggledOn = "has-background-success"

    const arrowIcon = "las la-angle-right"
    const crossIcon = "la la-close"

    const enabledClassName = "p-2 has-background-success cursorHint"
    const disabledClassName = "p-2 has-background-danger cursorHint"


/*
    if (statusObject[websiteEnum.instagram].enabled){
        instagramContainer.className = enabledClassName
        instagramContainerIcon.className = arrowIcon
    } else {
        instagramContainer.className = disabledClassName
        instagramContainerIcon.className = crossIcon
    }
*/

    if (statusObject[websiteEnum.reddit].enabled){
        redditContainer.className = enabledClassName
        redditContainerIcon.className = arrowIcon
    } else {
        redditContainer.className = disabledClassName
        redditContainerIcon.className = crossIcon
    }

    if (statusObject[websiteEnum.twitter].enabled){
        twitterContainer.className = enabledClassName
        twitterContainerIcon.className = arrowIcon
    } else {
        twitterContainer.className = disabledClassName
        twitterContainerIcon.className = crossIcon
    }

    if (statusObject[websiteEnum.youtube].enabled){
        youtubeContainer.className = enabledClassName
        youtubeContainerIcon.className = arrowIcon
    } else {
        youtubeContainer.className = disabledClassName
        youtubeContainerIcon.className = crossIcon
    }




    // Button Functionality


/*
    // Currently Bibliogram has been discontinued.
    // https://cadence.moe/blog/2022-09-01-discontinuing-bibliogram
    const toggleInstagram = () => {
        if (instagramContainer.classList.contains(toggledOn)) {
            instagramContainer.className = disabledClassName
            instagramContainerIcon.className = crossIcon
            statusObject[websiteEnum.instagram].enabled = false
        } else {
            instagramContainer.className = enabledClassName
            instagramContainerIcon.className = arrowIcon
            statusObject[websiteEnum.instagram].enabled = true
        }
        port.postMessage(statusObject);
    };
*/

    const toggleReddit = () => {

        if (redditContainer.classList.contains(toggledOn)) {
            redditContainer.className = disabledClassName
            redditContainerIcon.className = crossIcon
          statusObject[websiteEnum.reddit].enabled = false
        } else {
            redditContainer.className = enabledClassName
            redditContainerIcon.className = arrowIcon
            statusObject[websiteEnum.reddit].enabled = true
        }
        port.postMessage(statusObject);

    };

    const toggleTwitter = () => {
        if (twitterContainer.classList.contains(toggledOn)) {
            twitterContainer.className = disabledClassName
            twitterContainerIcon.className = crossIcon
            statusObject[websiteEnum.twitter].enabled = false
        } else {
            twitterContainer.className = enabledClassName
            twitterContainerIcon.className = arrowIcon
            statusObject[websiteEnum.twitter].enabled = true
        }
        port.postMessage(statusObject);
    };



    const toggleYoutube = () => {
        if (youtubeContainer.classList.contains(toggledOn)) {
            youtubeContainer.className = disabledClassName
            youtubeContainerIcon.className = crossIcon
            statusObject[websiteEnum.youtube].enabled = false
        } else {
            youtubeContainer.className = enabledClassName
            youtubeContainerIcon.className = arrowIcon
            statusObject[websiteEnum.youtube].enabled = true
        }
        port.postMessage(statusObject);
    };


    redditContainer.addEventListener("click", toggleReddit);
    twitterContainer.addEventListener("click", toggleTwitter);
   // instagramContainer.addEventListener("click", toggleInstagram);
    youtubeContainer.addEventListener("click", toggleYoutube);

})