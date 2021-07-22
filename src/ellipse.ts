/**
 * @file 椭圆
 * 
 * 提供create方式，传入options
 * 提供export Dom结构API
 */

import {Ellipse} from './types/index';
import {formatColor, formatPercent} from './format';
import {markCirclePoints, makePaths} from './matics';

// TODO 添加自定义前缀，否则，同一个环境多次引用，就会出现id重复的问题
// const DEGAULT_PREFIX = 'EE';
const RADIALGRADIENT_PREFIX = 'rg-';
const CLIPPATH_PREFIX = 'cut-';
const CLIPPATH_ELLIPSE = 'cut-ellipse';

const createEllipse = (options: Ellipse) => {
  const {deg, rx, ry, rgr, data} = options;
  const colorList: string[] = data.map(item => item.color);

  const defsNode = _defs(options);
  const groupNode = _group(colorList, rx, ry)
  const element = _svgBlock(rx, ry);

  element.appendChild(defsNode);
  element.appendChild(groupNode);

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
  const {deg, rx, ry, rgr, data: pieceList} = options;

  // 根据deg rx 以及percent数组，计算出 坐标点数组
  // 根据坐标点数组，映射 path数组
  // 然后再根据颜色 循环。
  const percentList: number[] = pieceList.map(item => formatPercent(item.percent));
  console.log({...percentList});
  const pointList = markCirclePoints(percentList, rx, deg);
  console.log({...pointList});
  const pathList = makePaths(pointList, rx);

  pieceList.forEach((item, index) => {
    ele.appendChild(_radialGradient(item.color, rgr));
    ele.appendChild(_clipPath(item.color, pathList[index]));
  })

  ele.appendChild(_ellipseClipPath(rx, ry));

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

const _clipPath = (color: string, d: string) => {
  const ele = document.createElement('clipPath');
  const id = formatColor(color);
  ele.setAttribute('id', `${CLIPPATH_PREFIX}${id}`);

  const path = document.createElement('path');
  path.setAttribute('d', d);

  ele.appendChild(path);

  return ele;
};

const _ellipseClipPath = (rx: number, ry: number) => {
  const ele = document.createElement('clipPath');
  ele.setAttribute('id', CLIPPATH_ELLIPSE);

  const ellipse = document.createElement('ellipse');
  const r = String(rx);
  ellipse.setAttribute('cx', r);
  ellipse.setAttribute('cy', r);
  ellipse.setAttribute('rx', r);
  ellipse.setAttribute('ry', String(ry));

  ele.appendChild(ellipse);

  return ele;
};

const _circle = (color: string, rx: number) => {
  const ele = document.createElement('circle');
  const id = formatColor(color);
  const r = String(rx);

  ele.setAttribute('cx', r);
  ele.setAttribute('cy', r);
  ele.setAttribute('r', r);
  ele.setAttribute('fill', `url(#${RADIALGRADIENT_PREFIX}${id})`);
  ele.setAttribute('clip-path', `url(#${CLIPPATH_PREFIX}${id})`);

  return ele;
};

const _group = (colorList: string[], rx: number, ry: number) => {
  const ele = document.createElement('g');
  ele.setAttribute('clip-path', `url(${CLIPPATH_ELLIPSE})`);
  ele.setAttribute('transform', `translate(0, -${ry / 2})`);

  colorList.forEach(item => {
    ele.appendChild(_circle(item, rx))
  });

  return ele;
};

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
