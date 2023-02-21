const divResults = document.querySelector('#results');
const wordResults = document.querySelector('#wordResults');
const p = document.querySelector('p');
const summary = document.querySelector('section:last-of-type');

const primaryColors = ['red', 'yellow', 'green', 'blue'];

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (const obj of data) {
      const div = document.createElement('div');

      const h3 = document.createElement('h3');
      h3.style.backgroundImage = `url(${obj.icon})`;
      h3.classList.add('h3BackgroundImage');
      h3.style.color = obj.color;
      h3.textContent = obj.category;

      const span = document.createElement('span');
      span.textContent = `${obj.score} / 100`;

      div.append(h3, span);
      div.classList.add('summaryLogs', `${obj.color}`);
      summary.append(div);
    }
    const h2 = document.createElement('h2');
    h2.textContent = 'Summary';

    const button = document.createElement('button');
    button.textContent = 'Continue';

    summary.prepend(h2);
    summary.append(button);
  })
  .catch((err) => {
    console.log(err);
  });
