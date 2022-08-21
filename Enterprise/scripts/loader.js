let H = window.screen.availHeight;
let W = window.screen.availWidth;
function Loading() {
    document.getElementById('loading').style.width = "100%";
    document.getElementById('loading').style.height = document.documentElement.clientHeight;
    document.getElementById('loading').style.paddingTop = (window.screen.availHeight / 2 - 156.5) + "px";
    document.getElementById('Enterprise').style.marginLeft = (document.documentElement.clientWidth / 2 - 156.5) + "px";
    //document.getElementById('frame').style.minHeight = "100%";
    setTimeout(Showw, 1750);
    setTimeout(Showww, 3300);
    setTimeout(Lend, 4300);
    setTimeout(Lendd, 4900);
    document.body.style.overflow = "hidden";
}
function Showw() {
    document.getElementById('llogodiv').style.transform = "translateX(-115%)";
}
function Showww() {
    document.getElementById('Enterprise').style.opacity = "1";

}
function Lend() {
    document.getElementById('loading').style.opacity = "0";

}
function Lendd() {
    document.getElementById('loading').style.display = "none";
    document.body.style.overflow = "visible";
}
window.onload = function () {
    Loading();
    rreview();
}