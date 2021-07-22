// Math.fround 精确计算
// Math.sin()
// Math.cos()
import {Point} from "./types";

const markCirclePoints = (percentList: number[], r: number, deg: number) => {
  // TODO 重点在这里 来吧三角函数
  return [{x: 0, y: 0}]
};

const makePaths = (pointList: Point[], r: number) => {
  const paths: string[] = [];
  pointList.forEach((item, index) => {
    const start = flatPoint(item);
    const center = `${r} ${r}`;
    const next = flatPoint(pointList[(index + 1) % pointList.length]); // 环形
    // M 起点
    // A x轴半径，y轴半径，x轴旋转角度（0表示不动），角度大小（0小1大），弧线方向（0逆1顺），终点坐标
    // L 终点
    // Z 结束
    const path = `M ${start} A ${center} 0 0 1 ${next} L ${center} Z`;
    paths.push(path);
  });

  return paths;
}

const flatPoint = (point: Point) => {
  const {x, y} = point;
  return `${x} ${y}`;
};

export {
  markCirclePoints,
  makePaths
};
