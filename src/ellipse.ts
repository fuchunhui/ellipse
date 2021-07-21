/**
 * @file 椭圆
 * 
 * 提供create方式，传入options
 * 提供export Dom结构API
 */

import {Ellipse} from './types/index';

const createEllipse = (options: Ellipse) => {
  const {deg, rx, ry, gr, data} = options;
  const element = _svgBlock(rx, ry);

  
  return element;
}

const _svgBlock = (rx: number, ry: number) => {
  const ele = document.createElement('svg');
  ele.setAttribute('width', String(rx));
  ele.setAttribute('height', String(ry));
  ele.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return ele;
};

const _defs = () => {};
const _radialGradient = () => {};
const _clipPath = () => {};
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
