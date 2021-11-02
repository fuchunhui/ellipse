import {createEllipse} from './ellipse';
import {createScatter} from './scatter';

const size = {
  rx: 564,
  ry: 253
};

const ellipse = createEllipse({
  deg: 0,
  ...size,
  rgr: '50%',
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

const scatter = createScatter({ // 暂定分离实现思路，不再推进，原理同。
  level: 1,
  ...size,
  data: [
    {
      level1: ['red', 'green', 'blue']
    },
    {
      level1: ['red', 'cyan']
    },
    {
      level1: ['blue']
    },
    {
    },
    {
    },
    {
      level1: ['#EE6677', '#CCBBDD', '#889900', 'rgb(123, 123, 123)']
    }
  ]
});

/**
 * 1. 椭圆或者圆，不限制方向。
 * 2. 支持默认不传rx, ry，使用getBoundingClientRect计算获取，取最大值，计算出rx, ry
 * 3. 可拖拽，拉伸，调节，自由变换尺寸
 * 
 * console.log(app.getBoundingClientRect());
 */

const app = document.getElementById('app') as Element;
app.appendChild(ellipse);
// app.appendChild(scatter);
