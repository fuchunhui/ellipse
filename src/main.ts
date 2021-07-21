import {createEllipse} from './ellipse';

const svg = createEllipse({
  deg: 0,
  rx: 564,
  ry: 253,
  gr: 0.5,
  data: [ // percent 小数点最多后4位
    {
      color: 'green',
      percent: 0.25
    },
    {
      color: 'purple',
      percent: 0.375
    },
    {
      color: 'green',
      percent: 0.225
    },
    {
      color: 'red',
      percent: 0.15
    }
  ]
});

const app = document.getElementById('app') as Element;
app.appendChild(svg);
