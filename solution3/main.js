const divResults = document.querySelector('#results');
const wordResults = document.querySelector('#wordResults');
const p = document.querySelector('p');
const summary = document.querySelector('#summary');

const primaryColors = ['red', 'yellow', 'green', 'blue'];

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (const obj of data) {
      const div = document.createElement('div');

      const img = document.createElement('img');
      img.src = obj.icon;

      const h3 = document.createElement('h3');
      h3.textContent = obj.category;

      const span = document.createElement('span');
      span.textContent = `${obj.score} / 100`;

      div.append(img, h3, span);
      div.classList.add('summaryLogs', `${obj.color}`);
      summary.append(div);
    }
  })
  .catch((err) => {
    console.log(err);
  });
