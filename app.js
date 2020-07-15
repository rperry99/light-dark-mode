const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

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
    modeSwap('dark', 0, 255, 'sun', 'moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    modeSwap('light', 255, 0, 'moon', 'sun');
  }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);
