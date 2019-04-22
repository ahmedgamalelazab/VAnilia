// testing the script if its working 


// selecting stuff indside

// lets try make a selecting library




var person="ahmed",carname="marcheddes",cousinName="amir";

console.log(person,carname,cousinName);

// this is calling one statment and many variables
// now creating undefied value

var carName;
console.log(carName);

// variable a small buttons calculator

// selecting numbers

var box_1=document.querySelector('.box-1');
var box_2=document.querySelector('.box-2');
var box_3=document.querySelector('.box-3');
var box_4=document.querySelector('.box-4');
var box_5=document.querySelector('.box-5');
var box_6=document.querySelector('.box-6');
var box_7=document.querySelector('.box-7');
var box_8=document.querySelector('.box-8');
var box_9=document.querySelector('.box-9');
var box_10=document.querySelector('.box-10');
var plusSign=document.querySelector('.plus');
var sum=document.querySelector('.sum');
// selecting the inputs

var numbersHolder=document.getElementById('numbers');
var resultHolder=document.getElementById('result');

var intialvalue=numbersHolder.value;

// creating an events

box_1.addEventListener('click',function(){
    numbersHolder.value=intialvalue+1;
    intialvalue=numbersHolder.value;
   
});
box_2.addEventListener('click',function(){
    numbersHolder.value=intialvalue+2;
    intialvalue=numbersHolder.value;
    
});
box_3.addEventListener('click',function(){
    numbersHolder.value=intialvalue+3;
    intialvalue=numbersHolder.value;
});
box_4.addEventListener('click',function(){
    numbersHolder.value=intialvalue+4;
    intialvalue=numbersHolder.value;
});
box_5.addEventListener('click',function(){
    numbersHolder.value=intialvalue+5;
    intialvalue=numbersHolder.value;
});
box_6.addEventListener('click',function(){
    numbersHolder.value=intialvalue+6;
    intialvalue=numbersHolder.value;
});
box_7.addEventListener('click',function(){
    numbersHolder.value=intialvalue+7;
    intialvalue=numbersHolder.value;
});
box_8.addEventListener('click',function(){
    numbersHolder.value=intialvalue+8;
    intialvalue=numbersHolder.value;
});
box_9.addEventListener('click',function(){
    numbersHolder.value=intialvalue+9;
    intialvalue=numbersHolder.value;
});
box_10.addEventListener('click',function(){
    numbersHolder.value=intialvalue+10;
    intialvalue=numbersHolder.value;
});

// selecting plus and active it

plusSign.addEventListener('click',function(){
    numbersHolder.value=intialvalue + "+" ;
    intialvalue=numbersHolder.value;
    return intialvalue;
});

// try making sum button work
var result=document.getElementById('result');
// selecting the sum
// here the sum is totally activated
sum.addEventListener('click',function(){
    console.log(eval(numbersHolder.value));
    result.value=eval(numbersHolder.value);

});

// selecting the reset

var reset=document.getElementById('reset');

reset.addEventListener('click',function(){
    location.reload();
});


// creating fixed function


// function Calc(X){
//     numbersHolder.value=intialvalue+X;
//     intialvalue=numbersHolder.value;

// }


// ------------------------------------------
// box_1.addEventListener('click',Calc('1'));
// box_2.addEventListener('click',Calclators("3"));










