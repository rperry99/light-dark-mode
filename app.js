const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = getElements('nav');
const toggleIcon = getElements('toggle-icon');
const image1 = getElements('image1');
const image2 = getElements('image2');
const image3 = getElements('image3');
const textBox = getElements('text-box');

// Function to not have to type document.getElementById so much
function getElements(id) {
  return document.getElementById(id);
}

// Function to dynamically change theme
function modeSwap(theme, navStyle, textStyle, icon1, icon2) {
  nav.style.backgroundColor = `rgb(${navStyle} ${navStyle} ${navStyle} / 50%)`;
  textBox.style.backgroundColor = `rgb(${textStyle} ${textStyle} ${textStyle} / 50%)`;
  toggleIcon.children[1].classList.replace(`fa-${icon1}-o`, `fa-${icon2}-o`);
  toggleIcon.children[0].textContent = `${theme} Mode`;
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_conceptual_idea_${theme}.svg`;
  image3.src = `img/undraw_feeling_proud_${theme}.svg`;
}

// Swith theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    modeSwap('dark', 0, 255, 'sun', 'moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    modeSwap('light', 255, 0, 'moon', 'sun');
  }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    modeSwap('dark', 0, 255, 'sun', 'moon');
  }
}
