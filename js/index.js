////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////SLIDER////////////////////////////////////////////////////// 
const sliderContainer = document.querySelector(".container-slider");
const iconRight = document.querySelectorAll(".slider-icon")[0];
const iconLeft = document.querySelectorAll(".slider-icon")[1];

iconRight.addEventListener("click", function () {

    let firstPic = document.getElementsByClassName("slider-img")[0];
    let sw = document.querySelector(".slider-img").clientWidth;
    firstPic.style.marginLeft = `-${sw}px`;

    setTimeout(function () {

        let source = firstPic.getAttribute("src");
        let Class = firstPic.getAttribute("class");
        firstPic.remove();
        let newImage = document.createElement("img");
        newImage.setAttribute("src", source);
        newImage.setAttribute("class", Class);
        sliderContainer.appendChild(newImage);

    }, 500);

});

iconLeft.addEventListener("click", function () {

    let lastPic = document.getElementsByClassName("slider-img")[document.getElementsByClassName("slider-img").length - 1];
    let sw = document.querySelector(".slider-img").clientWidth;
    let source = lastPic.getAttribute("src");
    let Class = lastPic.getAttribute("class");
    lastPic.remove();
    let newImage = document.createElement("img");
    newImage.setAttribute("src", source);
    newImage.setAttribute("class", Class);
    newImage.style.marginLeft = `-${sw}px`;
    sliderContainer.insertBefore(newImage, document.querySelector(".slider-img"));

    setTimeout(function () {
        newImage.style.marginLeft = `0`;
    }, 1);

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////END//////////////////////////////////////////////////////// 
