//1.Intialization

var a;
let b;
const c=10;

//2.Reassignment

a=10;
b=20;
console.log(a);
console.log(b);
//3.Redeclaration

var a=15;
//let b=25;
console.log(a);
console.log(b);

//4.scope.

var x=10;
let y=10;
const z=30;

{
   var i=10;
let j=10;
const k=30; 
console.log("INside the block")
console.log(i)
console.log(j)
console.log(k)
console.log(x)
console.log(y)
console.log(z)
}


//console.log(j)