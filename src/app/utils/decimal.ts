import { Decimal } from 'decimal.js';

let add = (a: number, b: number): any => { };
let sub = (a: number, b: number): any => { };
let mul = (a: number, b: number): any => { };
let divide = (a: number, b: number): any => { };
{
  add = (a, b) => {
    if( !a ){
      a=0;
    }
    if( !b ){
      b=0;
    }
    return new Decimal(a).add(new Decimal(b)).toNumber();
  }
  sub = (a, b) => {
    if( !a ){
      a=0;
    }
    if( !b ){
      b=0;
    }
    return new Decimal(a).sub(new Decimal(b)).toNumber();
  }
  mul = (a, b) => {
    if( !a ){
      a=0;
    }
    if( !b ){
      b=0;
    }
    return new Decimal(a).mul(new Decimal(b)).toNumber();
  }
  divide = (a, b) => {
    if( !a ){
      a=0;
    }
    if( !b ){
      b=0;
    }
    return new Decimal(a).div(new Decimal(b)).toNumber();
  }
}
export {
  add, sub, mul, divide
}
