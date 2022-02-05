const sliderContainerB = document.querySelector(".slider-containerB");
const slideRightB = document.querySelector(".right-slideB");
const slideLeftB = document.querySelector(".left-slideB");
const upButtonB = document.querySelector(".up-buttonB");
const downButtonB = document.querySelector(".down-buttonB");
const slidesLengthB = slideRightB.querySelectorAll(".slideSelectB").length;

let activeSlideIndexB = 0;


upButtonB.addEventListener("click", () => changeSlideB("up"));
downButtonB.addEventListener("click", () => changeSlideB("down"));

const changeSlideB = (direction) => {
    const sliderHeight = sliderContainerB.clientHeight;
    if (direction === "up") {
        activeSlideIndexB++;
        if (activeSlideIndexB > slidesLengthB - 1) {
            activeSlideIndexB = 0;
        }
    } else if (direction === "down") {
        activeSlideIndexB--;
        if (activeSlideIndexB < 0) {
            activeSlideIndexB = slidesLengthB - 1;
        }
    }

    slideRightB.style.transform = `translateY(-${activeSlideIndexB * sliderHeight
        }px)`;
};