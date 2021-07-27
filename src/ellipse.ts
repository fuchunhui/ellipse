/**
 * @file 椭圆
 * 
 * 提供create方式，传入options
 * 设计实现思路：
 * 1.svg 基础结构定义 rx * 2, ry * 2
 * 2.radialGradient 递归处理，颜色 r rg + 颜色
 * 3.计算正圆上的坐标点 函数
 * 4.计算每个clipPath的path路径
 * 5.拼接clipPath，id规则命名 cut + 颜色
 * 6.目前显示椭圆，clipPath定义
 * 7.定义每一片的外圈大圆
 * 8.svg拼接
 * 9.整体组装
 */

import {Ellipse} from './types/index';
import {formatColor, formatPercent} from './format';
import {markCirclePoints, makePaths} from './matics';

const SVGNS = 'http://www.w3.org/2000/svg';
const DEGAULT_PREFIX = '';
let RADIALGRADIENT_PREFIX = 'rg-';
let CLIPPATH_PREFIX = 'cut-';
let CLIPPATH_ELLIPSE = 'cut-ellipse';

const _prefix = (prefix: string) => {
  RADIALGRADIENT_PREFIX = prefix + RADIALGRADIENT_PREFIX;
  CLIPPATH_PREFIX = prefix + CLIPPATH_PREFIX;
  CLIPPATH_ELLIPSE = prefix + CLIPPATH_ELLIPSE;
};

const createEllipse = (options: Ellipse) => {
  const {rx, ry, data, prefix} = options;
  _prefix(prefix || DEGAULT_PREFIX);
  const colorList: string[] = data.map(item => item.color);

  const defsNode = _defs(options);
  const groupNode = _group(colorList, rx, ry);
  const element = _svgBlock(rx, ry);

  element.appendChild(defsNode);
  element.appendChild(groupNode);

  return element;
}

const _svgBlock = (rx: number, ry: number) => {
  const ele = document.createElementNS(SVGNS, 'svg');

  ele.setAttribute('width', String(rx * 2));
  ele.setAttribute('height', String(ry * 2));
  ele.setAttribute('xmlns', SVGNS);

  return ele;
};

const _defs = (options: Ellipse) => {
  const ele = document.createElementNS(SVGNS, 'defs');
  const {deg, rx, ry, rgr, data: pieceList, fullColor} = options;

  const percentList: number[] = pieceList.map(item => formatPercent(item.percent));
  const pointList = markCirclePoints(percentList, rx, deg);
  const pathList = makePaths(pointList, rx);

  pieceList.forEach((item, index) => {
    ele.appendChild(_radialGradient(item.color, rgr, fullColor));
    ele.appendChild(_clipPath(item.color, pathList[index]));
  })

  ele.appendChild(_ellipseClipPath(rx, ry));

  return ele;
};

const _radialGradient = (color: string, rgr: string, fullColor: string = 'white') => {
  const ele = document.createElementNS(SVGNS, 'radialGradient');
  const id = formatColor(color);

  ele.setAttribute('id', `${RADIALGRADIENT_PREFIX}${id}`);
  ele.setAttribute('r', rgr);

  const start = document.createElementNS(SVGNS, 'stop');
  start.setAttribute('offset', '0');
  start.setAttribute('stop-color', color);

  const end = document.createElementNS(SVGNS, 'stop');
  end.setAttribute('offset', '100%');
  end.setAttribute('stop-color', fullColor || 'white');

  ele.appendChild(start);
  ele.appendChild(end);

  return ele;
};

const _clipPath = (color: string, d: string) => {
  const ele = document.createElementNS(SVGNS, 'clipPath');
  const id = formatColor(color);
  ele.setAttribute('id', `${CLIPPATH_PREFIX}${id}`);

  const path = document.createElementNS(SVGNS, 'path');
  path.setAttribute('d', d);

  ele.appendChild(path);

  return ele;
};

const _ellipseClipPath = (rx: number, ry: number) => {
  const ele = document.createElementNS(SVGNS, 'clipPath');
  ele.setAttribute('id', CLIPPATH_ELLIPSE);

  const ellipse = document.createElementNS(SVGNS, 'ellipse');
  const r = String(rx);
  ellipse.setAttribute('cx', r);
  ellipse.setAttribute('cy', r);
  ellipse.setAttribute('rx', r);
  ellipse.setAttribute('ry', String(ry));

  ele.appendChild(ellipse);

  return ele;
};

const _circle = (color: string, rx: number) => {
  const ele = document.createElementNS(SVGNS, 'circle');
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
  const ele = document.createElementNS(SVGNS, 'g');
  ele.setAttribute('clip-path', `url(#${CLIPPATH_ELLIPSE})`);
  ele.setAttribute('transform', `translate(0, ${ry - rx})`);

  colorList.forEach(item => {
    ele.appendChild(_circle(item, rx))
  });

  return ele;
};

export {
  createEllipse
};
