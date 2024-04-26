//  Styles from the :root element
// var styles = window.getComputedStyle(document.documentElement);
// Get current color set in `--main-color` variable
// var color = styles.getPropertyValue('--main-color');
// Replace the color with a new value; now all elements using
// `--main-color` will be updated with the new color value. Handy! document
// documentElement.styles.setProperty('--main-color', 'hotpink');
// alert('hey')
const menuBtn = document.querySelector('.menu-icon-btn');
const closeBtn = document.querySelector('.btn-close');
const buttonsBoxEl = document.querySelector('.header__buttons');


menuBtn.addEventListener('click', () => {
    buttonsBoxEl.classList.add('show-menu')
});

closeBtn.addEventListener('click', () => {
    buttonsBoxEl.classList.remove('show-menu');
})

