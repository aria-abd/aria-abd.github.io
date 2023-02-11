//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////First Navigation [ In xl And xxl ]/////////////////////////////////////       
const icon = document.getElementsByClassName("nav-icons");
let images_icon_1 = ["https://www.asus.com/media/Odin/images/header/ROG_hover.svg", "https://www.asus.com/media/Odin/images/header/ROG_normal.svg", "https://www.asus.com/media/Odin/images/header/ProArt_hover.svg", "https://www.asus.com/media/Odin/images/header/ProArt_normal.svg", "https://www.asus.com/media/Odin/images/header/IoT_hover.svg", "https://www.asus.com/media/Odin/images/header/IoT_normal.svg"];
icon[0].addEventListener("mouseenter", function () {
    icon[0].setAttribute("src", images_icon_1[0]);
    icon[0].classList.add("js-icons");
});
icon[0].addEventListener("mouseout", function () {
    icon[0].setAttribute("src", images_icon_1[1]);
    icon[0].classList.remove("js-icons");
});
icon[1].addEventListener("mouseenter", function () {
    icon[1].setAttribute("src", images_icon_1[2]);
    icon[1].classList.add("js-icons");
});
icon[1].addEventListener("mouseout", function () {
    icon[1].setAttribute("src", images_icon_1[3]);
    icon[1].classList.remove("js-icons");
});
icon[2].addEventListener("mouseenter", function () {
    icon[2].setAttribute("src", images_icon_1[4]);
    icon[2].classList.add("js-icons");
});
icon[2].addEventListener("mouseout", function () {
    icon[2].setAttribute("src", images_icon_1[5]);
    icon[2].classList.remove("js-icons");
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////Main Navigation///////////////////////////////////////////////////
let icon_list = document.getElementsByClassName("left-icon");
let js_add = document.getElementsByClassName("js-add");

icon_list[0].addEventListener("click", function () {
    js_add[0].classList.toggle("js-list");
    js_add[1].classList.toggle("js-list");
    js_add[2].classList.toggle("js-list");
    icon_list[0].classList.toggle("bi-x-lg");
    icon_list[0].classList.toggle("bi-list");
    console.log("afaf");
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////Blue Navigation///////////////////////////////////////////////////
let blue_nav = document.getElementsByClassName("blue-nav")[0];
window.addEventListener("scroll", function () {
    let scroll_x = this.scrollY;
    if (scroll_x > 1) {
        blue_nav.classList.add("js-noner");
    };
    if (scroll_x == 0) {
        blue_nav.classList.remove("js-noner");
    };
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Slider////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Footer////////////////////////////////////////////////////////
