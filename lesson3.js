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

// Задание №3
let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log(bestProgrammingLanguage1, bestProgrammingLanguage2, 'Переменную с const переопределить нельзя');
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
console.log(isJavaScriptProgrammer1, isJavaScriptProgrammer2, 'var является устаревшим');
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2);

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';
helloText2 = helloText1;
console.log(helloText2, typeof helloText1);
