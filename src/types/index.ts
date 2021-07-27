export interface Piece {
  color: string; // white, #FE00FE, rgba(231, 231, 231, 0.8), rgb(255, 23, 12)
  percent: number | string; // 0.23, 23.1%, 54.23%
  level1?: string[]; // 层级，对应的色值
  level2?: string[]; // 层级，对应的色值
  level3?: string[]; // 层级，对应的色值
};

export interface Ellipse {
  deg: number; // 默认起始角度，与12点方向，顺时针方向的偏移量。也就是第一个图区，应该从哪里开始画。
  rx: number; // 椭圆长轴半径，也就是正圆的半径
  ry: number; // 椭圆的短轴半径，当ry = rx的时候，表现为正圆效果
  rgr: string; // 径向渐变半径，默认为50%
  data: Piece[]; // 每一片的占比和颜色
  prefix?: string; // 自定义defs 元素id的前缀，用于区分多次使用，避免id重复问题
  fullColor?: string; // 100%状态的色值，默认white
};

export interface Point {
  x: number;
  y: number;
};

type Levels = 1 | 2 | 3;

type Level = {
  [k in `level${Levels}`]?: string[];
};

export interface Scatter {
  rx: number;
  ry: number;
  level?: number; // 椭圆上的散点系列，默认值为0
  data: Level[]; // 层级数组，散点序列
};
