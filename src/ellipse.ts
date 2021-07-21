/**
 * @file 椭圆
 * 
 * 提供create方式，传入options
 * 提供export Dom结构API
 */

import {Ellipse} from './types/index';

const createEllipse = (options: Ellipse) => {
  console.log({...options});
}

const getDom = () => {
  return '';
}

export {
  createEllipse
};
