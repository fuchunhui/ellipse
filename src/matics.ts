// Math.fround 精确计算
// Math.sin()
// Math.cos()

const formatColor = (value: string) => {
  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)) {
    return value.slice(1).toLowerCase(); // #AA33E5 => aa33e5
  } else {
    return value.replace(/[(?\.?)?]/g, '').replaceAll(',', '-'); // rgba(232, 123, 45, 0.5) -> rgba232-123-45-05
  }
};

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
  formatColor,
  formatPercent
};
