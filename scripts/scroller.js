window.onscroll = function () {
    scrollMy();
}
function scrollMy() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (windowScroll / docHeight) * 100;
    document.getElementById('myBar').style.height = scrolled + '%';

}
window.addEventListener('scroll', function () {
    rreview();
});
function rreview() {
    var el = document.getElementById('newstime');
    var el2 = document.getElementById('aimgdiv');
    if (pageYOffset > 30) {
        document.getElementById('imm').style.transform = "rotate(0deg)";
        document.getElementById('upp').href = "#frame";
    }
    else if (el && !el2) {
        document.getElementById('imm').style.transform = "rotate(180deg)";
        document.getElementById('upp').href = "#newstime";
    }
    else if (!el && el2) {
        document.getElementById('imm').style.transform = "rotate(180deg)";
        document.getElementById('upp').href = "#aimgdiv";
    }
    else if (!el && !el2) {
        document.getElementById('imm').style.transform = "rotate(180deg)";
        document.getElementById('upp').href = "#addmy";
    }
}
document.getElementById('i1').style.width = document.documentElement.clientWidth; + "px";
