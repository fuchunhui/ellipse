export interface Piece {
  color: string;
  percent: number | string;
};

export interface Ellipse {
  deg: number; // 默认起始角度，与12点方向，顺时针方向的偏移量。也就是第一个图区，应该从哪里开始画。
  rx: number; // 椭圆长轴半径，也就是正圆的半径
  ry: number; // 椭圆的短轴半径，当ry = rx的时候，表现为正圆效果
  rgr: string; // 径向渐变半径，默认为50%
  data: Piece[] // 每一片的占比和颜色
};
