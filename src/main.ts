import {createEllipse} from './ellipse';

const svg = createEllipse({
  deg: 0,
  rx: 160,
  ry: 80,
  // rx: 564,
  // ry: 253,
  rgr: '50%',
  data: [ // percent 小数点最多后4位
    {
      color: 'green',
      percent: 0.25
    },
    {
      color: 'purple',
      percent: '37.5%'
    },
    {
      color: 'cyan',
      percent: 0.225
    },
    {
      color: '#FF0000',
      percent: 0.15
    }
  ]
});

const app = document.getElementById('app') as Element;
app.appendChild(svg);
