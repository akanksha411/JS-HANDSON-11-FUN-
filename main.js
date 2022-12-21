console.log('Q1');

function say(){
    console.log('Hello');
}
say()

console.log('Q2');

function sum(x,y){
    console.log(`${x}+${y}=${x+y}`);
}
sum(3,4)

console.log('Q3');

const Gm=()=>{
    console.log('Good Morning');
}
Gm();
console.log('Q4');

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

console.log('Q5');

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

console.log('Q6');

var x = 21;
a();
b();

  function a() {

   x = 20;
  console.log(x);
};
 function b() {

    x = 40;
   console.log(x);
};

console.log('Q7');

const factorial=(n)=>{
    var fact = n;
    if (n === 0 || n === 1) 
      return 1; 
    while (n > 1) { 
      n--;
      fact *= n;
    }
    console.log(fact);;
}
factorial(5)