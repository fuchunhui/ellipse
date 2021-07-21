/**
 * @file 椭圆
 * 
 * 提供create方式，传入options
 * 提供export Dom结构API
 */

import {Ellipse, Piece} from './types/index';
import {formatColor} from './matics';

const RADIALGRADIENT_PREFIX = 'rg-';
const CLIPPATH_PREFIX = 'cut-';

const createEllipse = (options: Ellipse) => {
  const {deg, rx, ry, rgr, data} = options;
  // const colorList: string[] = data.map(item => item.color);
  
  const defsNode = _defs(options);
  const element = _svgBlock(rx, ry);
  element.appendChild(defsNode);
  return element;
}

const _svgBlock = (rx: number, ry: number) => {
  const ele = document.createElement('svg');
  ele.setAttribute('width', String(rx));
  ele.setAttribute('height', String(ry));
  ele.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return ele;
};

const _defs = (options: Ellipse) => {
  const ele = document.createElement('defs');
  const {deg, rx, rgr, data: pieceList} = options;

  pieceList.forEach(item => {
    ele.appendChild(_radialGradient(item.color, rgr));
    // ele.appendChild(_clipPath(item, rgr));
  })
  return ele;
};

const _radialGradient = (color: string, rgr: string) => {
  const ele = document.createElement('radialGradient');
  const id = formatColor(color);

  ele.setAttribute('id', `${RADIALGRADIENT_PREFIX}${id}`);
  ele.setAttribute('r', rgr);

  const start = document.createElement('stop');
  start.setAttribute('offset', '0');
  start.setAttribute('stop-color', color);

  const end = document.createElement('stop');
  end.setAttribute('offset', '100%'); // 也许是可变值，可以是变量
  end.setAttribute('stop-color', 'white'); // white 也可以是变化的值

  ele.appendChild(start);
  ele.appendChild(end);

  return ele;
};

const _clipPath = () => {

};
const _ellipseClipPath = () => {};
const _circle = () => {};
const _group = () => {};

// svg 基础结构定义 rx * 2, ry * 2
// radialGradient 递归处理，颜色 r rg + 颜色
// 计算正圆上的坐标点 函数
// 计算每个clipPath的path路径
// 拼接clipPath，id规则命名 cut + 颜色
// 目前显示椭圆，clipPath定义
// 定义每一片的外圈大圆
// svg拼接
// 整体组装

export {
  createEllipse
};
