// Math.fround 精确计算
// Math.sin()
// Math.cos()



const formatPercent = (value: string | number) => {
  if (typeof value === 'number') {
    return value;
  }
  if (/^\d{1,2}(\.\d{1,2})?%$/.test(value)) { // 35.23% -> 0.3523
    const num = Number(value.slice(0, -1)) * 100 / 10000;
    return num;
  }
  return 0;
}

export {
  formatPercent
};
