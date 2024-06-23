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
console.log( Boolean(symb), String(symb));

let big=BigInt(10050);
console.log(Number(big), Boolean(big), String(big));

// Задание №2
console.log(Number('10'), typeof Number('10')); // явное

console.log(+'50'); //1 - неявное

console.log(Number('100')); //2 - явное

console.log('' + 1); //3 - неявное

console.log(String(1)); //4 - явное

console.log(Boolean(0)); //5 - явное

console.log(+'001'); //6 - неявное

console.log(1 + ''); //7 - неявное

console.log(Boolean(1)); //8 - явное

console.log(String(001)); //9 - явное

console.log(Number('Hello World')); //10 - явное

// Задание №3
console.log('console.log');
console.log(String(console.log));
console.log(Number(console.log));
console.log(Boolean(console.log));

console.log({ name: 'Maxim' });
console.log(String({ name: 'Maxim' }));
console.log(Number({ name: 'Maxim' }));
console.log(Boolean({ name: 'Maxim' }));

console.log(Symbol('key'));
console.log(String(Symbol('key')));
// console.log(Number(Symbol('key')));
console.log(Boolean(Symbol('key')));

console.log('Number');
console.log(String(Number));
console.log(Number(Number));
console.log(Boolean(Number));

console.log('');
console.log(String(''));
console.log(Number(''));
console.log(Boolean(''));

console.log('0');
console.log(String(0));
console.log(Number(0));
console.log(Boolean(0));

console.log('-10');
console.log(String(-10));
console.log(Number(-10));
console.log(Boolean(-10));

console.log('-105');
console.log(String('-105'));
console.log(Number('-105'));
console.log(Boolean('-105'));