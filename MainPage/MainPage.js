const cookieName = "hasLoaded";

window.onload = function () {
    if (document.cookie == '') {
        document.cookie = cookieName;
        window.location.href = "../WebsiteLoadingPage/LoadingPage.html";
    }
};