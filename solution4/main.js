const numButtons = document.querySelector('.num-buttons');

numButtons.addEventListener('click', (e) => {
  if (e.target.nodeName == 'BUTTON') {
    const children = numButtons.children;
    for (const child of children) {
      child.classList.remove('active');
    }
    e.target.classList.add('active');
  }
});

const mainButton = document.querySelector('.main-button');
const firstSection = document.querySelector('.first');
const secondSection = document.querySelector('.second');

mainButton.addEventListener('click', () => {
  firstSection.classList.add('hidden');
  secondSection.classList.remove('hidden');
});
