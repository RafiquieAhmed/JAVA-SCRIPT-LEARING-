console.log("Hello_world");
//variables 
num1=10;
console.log(num1)

//Data types using global scope

//var using  both can change decalaration and intialiuzation possible;
var a="hi !";
var a="who the hell are you";
console.log(a)

//let using
//only intailzation is possible values can chage
let b="123";
    b="456"
console.log(b)

// const using 

const id =2333263928;
console.log(id)

//local scope block
{
    const id=1;
   // const id =2; decalaration aND INTIALIZTION IS not possible
    const name="Gojo";

    console.log(id,name);
}

//how to namming varibles
/*1. meaningful
2. case sensentive
3 .start with alphabests ,in naming aphlabets ,numbers, _ ca be use
4.numbers not start with name of variable
5.reversed word are not use;
6.blank sapce is n ot allowed
*/