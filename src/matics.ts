import {Point} from './types';

const markCirclePoints = (percentList: number[], r: number, deg: number) => {
  const startAngle = deg + 0;
  const start = _point(startAngle, r);
  const points = [start];

  const angleList = percentList.map(item => _angle(item));
  angleList.forEach((item, index) => {
    const angle = angleList.slice(0, index + 1).reduce((a, b) => a + b, startAngle);
    const point = _point(angle, r);
    points.push(point);
  });

  return points;
};

const _angle = (percent: number) => {
  return percent * 360;
}

/**
 * 与12点钟方向对于，求出顺时针偏移的弧度值，对应的圆上实际点坐标。
 * 对比方向为数学直角坐标的正Y轴，坐标原点是(0, 0)，映射为圆心点(r, r)，故x, y需要加上一个偏移量
 * @param angle 圆形的弧度值
 * @param r 圆形半径
 * @returns 真实坐标值
 */
const _point = (angle: number, r: number) => {
  const rad = angle * Math.PI / 180;
  const x = Math.sin(rad) * r + r;
  const y = - Math.cos(rad) * r + r;
  return {
    x,
    y
  };
};

const makePaths = (pointList: Point[], r: number) => {
  const paths: string[] = [];
  pointList.forEach((item, index) => {
    const start = _flatPoint(item);
    const center = `${r} ${r}`;
    const next = _flatPoint(pointList[(index + 1) % pointList.length]); // 环形
    // M 起点
    // A x轴半径，y轴半径，x轴旋转角度（0表示不动），角度大小（0小1大），弧线方向（0逆1顺），终点坐标
    // L 终点
    // Z 结束
    const path = `M ${start} A ${center} 0 0 1 ${next} L ${center} Z`;
    paths.push(path);
  });

  return paths;
}

const _flatPoint = (point: Point) => {
  const {x, y} = point;
  return `${x} ${y}`;
};

export {
  markCirclePoints,
  makePaths
};
