import {createEllipse} from './ellipse';

const svg = createEllipse({
  deg: 0,
  rx: 564,
  ry: 253,
  rgr: '50%',
  // data: [ // percent 小数点最多后4位
  //   {
  //     color: 'green',
  //     percent: 0.25
  //   },
  //   {
  //     color: 'purple',
  //     percent: '37.5%'
  //   },
  //   {
  //     color: 'cyan',
  //     percent: 0.225
  //   },
  //   {
  //     color: '#FF0000',
  //     percent: 0.15
  //   }
  // ]
  data: [
    {
      color: '#FEF4D4',
      percent: 0.20
    },
    {
      color: '#dFE8FF',
      percent: '37.5%'
    },
    {
      color: '#DDF1FE',
      percent: 0.225
    },
    {
      color: '#DFF9EF',
      percent: 0.05
    },
    {
      color: '#D7F5F7',
      percent: 0.10
    },
    {
      color: '#F5E7FE',
      percent: 0.05
    }
  ],
  prefix: '',
  fullColor: ''
});

const app = document.getElementById('app') as Element;
app.appendChild(svg);
