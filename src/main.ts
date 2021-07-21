console.log('Hello World!');

import {createEllipse} from './ellipse';
// import {Piece} from './types/index';

console.log(createEllipse);

createEllipse({
  deg: 0,
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

