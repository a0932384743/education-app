export const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'header',
  'aside',
  'secondary',
  'footer',
];

export type ColorType =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'header'
  | 'aside'
  | 'footer'
  | 'secondary'

export const colorBrightness = (color:string, factor:number)=> {
  // 移除颜色代码中的 #
  const hex = color.replace(/^#/, '');

  // 将十六进制颜色转换为
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const adjust = (value:number, factor:number) => {
    return Math.round(Math.min(255, Math.max(0, value * factor)));
  };

  const newR = adjust(r, factor);
  const newG = adjust(g, factor);
  const newB = adjust(b, factor);

  const newColor = (newR << 16) + (newG << 8) + newB;
  return `#${newColor.toString(16).padStart(6, '0')}`;
};

export default colors;
