document.addEventListener('DOMContentLoaded', function () {

    const redditContainer = document.getElementById("Reddit")
    const twitterContainer = document.getElementById("Twitter")
    const instagramContainer =  document.getElementById("Instagram")

    const redditContainerIcon = document.getElementById("RedditIcon")
    const twitterContainerIcon = document.getElementById("TwitterIcon")
    const instagramContainerIcon =  document.getElementById("InstagramIcon")

    const toggledOn = "has-background-success"
    const toggledOff = "has-background-danger"

    const arrowIcon = "fa-arrow-right"
    const crossIcon = "fa-xmark"

    const toggleReddit = () => {
        redditContainer.classList.toggle(toggledOff, redditContainer.classList.contains(toggledOn));
        redditContainerIcon.classList.toggle(crossIcon, redditContainer.classList.contains(arrowIcon));
        document.getElementById("demo").innerHTML = redditContainerIcon.className;
    };

    const toggleTwitter = () => {
        document.getElementById("demo").innerHTML = "Hello World";
    };

    const toggleInstagram = () => {
        document.getElementById("demo").innerHTML = "Hello World";
    };



    redditContainer.addEventListener("click", toggleReddit);
    twitterContainer.addEventListener("click", toggleTwitter);
    instagramContainer.addEventListener("click", toggleInstagram);





});




