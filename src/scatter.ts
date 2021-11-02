import {Scatter} from './types/index';

const SVGNS = 'http://www.w3.org/2000/svg';

const createScatter = (options: Scatter) => {
  const {rx, ry, data, level} = options;
  const element = _svgBlock(rx, ry);
  return element;
};

const _svgBlock = (rx: number, ry: number) => {
  const ele = document.createElementNS(SVGNS, 'svg');

  ele.setAttribute('width', String(rx * 2));
  ele.setAttribute('height', String(ry * 2));
  ele.setAttribute('xmlns', SVGNS);

  return ele;
};

const _level = () => {
  // 多层级椭圆
  const ele = document.createElementNS(SVGNS, 'g');
  // colorList.forEach(item => {
  //   ele.appendChild(_circle(item, rx))
  // });

  return ele;
};

const _cellCircle = () => {
  // 绘制最小的圆
}

export {
  createScatter
};
