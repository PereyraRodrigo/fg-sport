function showDesktopSlider() {
    let element = document.getElementById('verticalSliderDesktop');
    element.classList.add('d-none', 'd-lg-block');
}
function showMobileSlider() {
    let element = document.getElementById('verticalSliderMobile');
    element.classList.add('d-block', 'd-lg-none');
}