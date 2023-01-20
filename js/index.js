//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////First Navigation [ In xl And xxl ]/////////////////////////////////////       

const icon = document.getElementsByClassName("nav-icons");
let images_icon_1 = ["https://www.asus.com/media/Odin/images/header/ROG_hover.svg", "https://www.asus.com/media/Odin/images/header/ROG_normal.svg"];

icon[0].addEventListener("mouseenter", function () {
    icon[0].setAttribute("src", images_icon_1[0]);
    icon[0].classList.add("js-icons");
});
icon[0].addEventListener("mouseout", function () {
    icon[0].setAttribute("src", images_icon_1[1]);
    icon[0].classList.remove("js-icons");
});
let images_icon_2 = ["https://www.asus.com/media/Odin/images/header/ProArt_hover.svg", "https://www.asus.com/media/Odin/images/header/ProArt_normal.svg"]
icon[1].addEventListener("mouseenter", function () {
    icon[1].setAttribute("src", images_icon_2[0]);
    icon[1].classList.add("js-icons");
});
icon[1].addEventListener("mouseout", function () {
    icon[1].setAttribute("src", images_icon_2[1]);
    icon[1].classList.remove("js-icons");
});
let images_icon_3 = ["https://www.asus.com/media/Odin/images/header/IoT_hover.svg", "https://www.asus.com/media/Odin/images/header/IoT_normal.svg"];
icon[2].addEventListener("mouseenter", function () {
    icon[2].setAttribute("src", images_icon_3[0]);
    icon[2].classList.add("js-icons");
});
icon[2].addEventListener("mouseout", function () {
    icon[2].setAttribute("src", images_icon_3[1]);
    icon[2].classList.remove("js-icons");
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
