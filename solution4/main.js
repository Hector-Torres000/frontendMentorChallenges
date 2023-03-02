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
const score = document.querySelector('.score');

mainButton.addEventListener('click', () => {
  for (const button of numButtons.children) {
    if (button.classList.contains('active')) {
      const numScore = button.textContent;
      firstSection.classList.add('hidden');
      secondSection.classList.remove('hidden');
      score.textContent = `You selected ${numScore} out of 5`;
    }
  }
});
