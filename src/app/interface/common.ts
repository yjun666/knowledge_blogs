// 保留小数位数
export interface KeepFloatDecimalType {
  num?: any, // 数值
  fixedNum?: number, // 需要保存的小数位数
  isPercent?: boolean | number, // 是否需要转化成为百分比，需要多除以一个100，如果为 true 那么默认显示百分比，如果为false 或者0 为不需要百分比，如果为1000 那么显示千分比，如果为1000000 那么就是单位转换为百万兆
  defValue?: string | number; // 如果参数isNaN为true，那么默认显示的值是什么
  isForceToFixed?: boolean; // 是否强制保留小数
  unit?: string; // 当前参数后边需要添加的单位是什么
  transType?: 'number' | 'string';  // 是否需要转换成为number类型还是string类型
  truncType?:'floor'|'round'|'ceil'; // 取整类型 floor 向下取整，round 四舍五入，ceil 向上取整
}
