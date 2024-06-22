// Задание №1
const st='Привет Света';
const num=22;
const bool=true;
const bd=null;
const car=undefined;
const ofv= {
   boolean:true,
   number:22,
};
const symb=Symbol('id');
const big=BigInt(1000000);

console.log('st', st, typeof st);
console.log('num', num, typeof num);
console.log('bool', bool, typeof bool);
console.log('bd', bd, typeof bd);
console.log('car', car, typeof car);
console.log('ofv', ofv, typeof ofv);
console.log('symb', symb, typeof symb);
console.log('big', big, typeof big);

// Задание №2
let a = 5;
let b = '100';
let c = true;

a = '5';
b = 100;
c = null;

alert(a);
alert(b);
alert(c);