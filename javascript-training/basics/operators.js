//1.Arithmetic operator
//2.Assignment operator
//3.comparison operator
//4.Logical operator
//5.Ternary Operator.
//3.comparisonoperator

let x=10;
let y=10;
let z="10";

console.log(x==z);//loose equality true
console.log(x===z);//stric equality compare both datatype and value false
let p=20;
let q=30;
let r=45;
//4.logical operator
console.log(p<q && q>r );// true and false= false
console.log(p>q || r>q);//fale and true=true
console.log(!(p>q || r>q));//false and true its not operator so false

//5.Ternary Operator

let age=18;
let result=(age>=18)?"Elligible to vote":"Not Elligible to vote"
console.log(result)