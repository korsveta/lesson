// Задание №1
let st='Привет Дима';
console.log(Number(st), Boolean(st), String(st));

let num=21;
console.log(Number(num), Boolean(num), String(num));

let bool=false;
console.log(Number(bool), Boolean(bool), String(bool));

let bd=null;
console.log(Number(bd), Boolean(bd), String(bd));

let car=undefined;
console.log(Number(car), Boolean(car), String(car));

let ofv= {
   boolean:false,
   number:21,
};
console.log(Number(ofv), Boolean(ofv), String(ofv));

let symb=Symbol('id');
console.log(Number(symb), Boolean(symb), String(symb));

let big=BigInt(10050);
console.log(Number(big), Boolean(big), String(big));