'use strict';

// BROWSER
function getBrowser() {
  const userAgent = navigator.userAgent;
  const browserMapping = {
    'Chrome': 'Chrome',
    'Firefox': 'Firefox',
    'Safari': 'Safari',
    'Edg': 'Edge',
    'OPR': 'Opera'
  };
  let browserName = Object.keys(browserMapping).find(key => userAgent.includes(key)) || 'Unidentified';
  return browserMapping[browserName];
}
console.log(`Browser: ${getBrowser()}`);

// OPERATING SYSTEM
  console.log(`Operating: ${navigator.userAgentData.platform}`);


// WINDOW
const readWindow = () => {
 let pageW = `Window width: ${window.innerWidth}px`;
  let pageH = `Window height: ${window.innerHeight}px`;
  console.log(pageW);
  console.log(pageH);
}
readWindow();





































const checkbox = document.querySelectorAll('.checkbox')
const blur = document.querySelector('.main-text')
const cookies = document.querySelector('.cookies')
const closePop = document.querySelectorAll('.accept')
const settingsButton = document.querySelector('.settings')
const preferences = document.querySelector('.preferences')
const savePreferences = document.querySelector('.save-pref')

checkbox.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkbox.classList.toggle("move");
    checkbox.querySelector('.circle').classList.toggle("move");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    blur.classList.add('blur');
    cookies.classList.add("visible");
  }, 800);
})

closePop.forEach(closePop => {
  closePop.addEventListener('click', () => {
    cookies.classList.remove("visible");
    preferences.classList.remove("visible")
    blur.classList.remove('blur');
  })
})

settingsButton.addEventListener('click', () => {
  cookies.classList.remove("visible");
  preferences.classList.add("visible")
})