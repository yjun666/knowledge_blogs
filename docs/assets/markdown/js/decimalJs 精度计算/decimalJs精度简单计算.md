#### decimal.js 精度计算
```
import { Decimal } from 'decimal.js';

let add = (a: number, b: number): any => { };
let sub = (a: number, b: number): any => { };
let mul = (a: number, b: number): any => { };
let divide = (a: number, b: number): any => { };
{
  add = (a, b) => {
    return new Decimal(a).add(new Decimal(b)).toNumber();
  }
  sub = (a, b) => {
    return new Decimal(a).sub(new Decimal(b)).toNumber();
  }
  mul = (a, b) => {
    return new Decimal(a).mul(new Decimal(b)).toNumber();
  }
  divide = (a, b) => {
    return new Decimal(a).div(new Decimal(b)).toNumber();
  }
}
export {
  add, sub, mul, divide
}

const a = 9.95;
const b = 8.03;
console.log(add(a, b),
  sub(a, b),
  mul(a, b),
  divide(a, b));
```
