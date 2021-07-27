import {createEllipse} from './ellipse';

const svg = createEllipse({
  deg: 0,
  rx: 564,
  ry: 253,
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

/**
 * 1. 椭圆或者圆，不限制方向。
 * 2. 支持默认不传rx, ry，使用getBoundingClientRect计算获取，取最大值，计算出rx, ry
 * 3. 可拖拽，拉伸，调节，自由变换尺寸
 * 
 * console.log(app.getBoundingClientRect());
 */

const app = document.getElementById('app') as Element;
app.appendChild(svg);
