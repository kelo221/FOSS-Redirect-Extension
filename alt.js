document.addEventListener('DOMContentLoaded', function() {

    const redditContainer = document.getElementById("Reddit")
    const twitterContainer = document.getElementById("Twitter")
    const instagramContainer = document.getElementById("Instagram")
    const youtubeContainer = document.getElementById("Youtube")

    const redditContainerIcon = document.getElementById("RedditIcon")
    const twitterContainerIcon = document.getElementById("TwitterIcon")
    const instagramContainerIcon = document.getElementById("InstagramIcon")
    const youtubeContainerIcon = document.getElementById("YoutubeIcon")

    const toggledOn = "has-background-success"
    const toggledOff = "has-background-danger"

    const arrowIcon = "las la-angle-right"
    const crossIcon = "la la-close"


    const toggleReddit = () => {

        if (redditContainer.classList.contains(toggledOn)) {
            redditContainer.className = "p-2 has-background-danger cursorHint";
            redditContainerIcon.className = crossIcon
        } else {
            redditContainer.className = "p-2 has-background-success cursorHint";
            redditContainerIcon.className = arrowIcon
        }

        //  document.getElementById("demo").innerHTML = redditContainerIcon.className;
    };

    const toggleTwitter = () => {
        if (twitterContainer.classList.contains(toggledOn)) {
            twitterContainer.className = "p-2 has-background-danger cursorHint";
            twitterContainerIcon.className = crossIcon
        } else {
            twitterContainer.className = "p-2 has-background-success cursorHint";
            twitterContainerIcon.className = arrowIcon
        }
    };

    const toggleInstagram = () => {
        if (instagramContainer.classList.contains(toggledOn)) {
            instagramContainer.className = "p-2 has-background-danger cursorHint";
            instagramContainerIcon.className = crossIcon
        } else {
            instagramContainer.className = "p-2 has-background-success cursorHint";
            instagramContainerIcon.className = arrowIcon
        }
    };

    const toggleYoutube = () => {
        if (youtubeContainer.classList.contains(toggledOn)) {
            youtubeContainer.className = "p-2 has-background-danger cursorHint";
            youtubeContainerIcon.className = crossIcon
        } else {
            youtubeContainer.className = "p-2 has-background-success cursorHint";
            youtubeContainerIcon.className = arrowIcon
        }
    };


    redditContainer.addEventListener("click", toggleReddit);
    twitterContainer.addEventListener("click", toggleTwitter);
    instagramContainer.addEventListener("click", toggleInstagram);
    youtubeContainer.addEventListener("click", toggleYoutube);

})