
let cash = 1000 , currentLiabilities = 500 ;
console.log( cash / 500);


// **********************************************

revenues = 1000 , expenses = 500 ;
console.log( revenues - expenses);

// **********************************************

let liabilities = 1000 , equity = 500 ;
console.log(liabilities + equity);

// **********************************************

let profit = 1000 , sales = 500 ;
console.log(profit * sales);

// **********************************************

array = [7, 9 , 2];

let length = array.length;

let sum = 0;

for ( let i=0; i<array.length ; i++){
    sum += array[i];
};
let average = sum / length ;

// let num1 = 7;
// let num2 = 9;
// let num3 = 2;
// let sum = num1 + num2 + num3 ;
// let average = sum / 3 ; 

console.log(average);

// ***************************************

let price = 150 ;
discount = 0.7;
console.log(price * discount);

// *************************************

let age1 = 18;
let age2 = 30;

console.log(20 > age1 && 20 < age2);

// ************************************

let num11 = Math.pow(1, 2);

let num22 = Math.pow(2, 3);
console.log(num22);

// ************************************


let n1 = 1 % 10 ;
let n2 = 2 % 4 ; 

console.log(n2);

// ************************************

document.write("typeof (100) <br>");
document.write("typeof (73.9) <br>");
document.write("typeof (NaN) <br>");
document.write(`typeof ("Water") <br>`);
document.write("typeof (false) <br>");
document.write("typeof (9 != 11) <br>");
document.write(`"Orang" + "e" <br>`);
document.write(`"Orange" + "s" <br> `);
document.write(`"4" + "8" <br>`);
document.write(`"4" - "8" <br>`);
document.write(`"name" + 3 <br>`);
document.write(`"name" - 3 <br>`);
document.write(`82 * "word" <br>`);
document.write(`1 + "hello" <br>`);
document.write(`"hello" + 1 <br>`);
document.write("1 + true <br>");
document.write(`"hello" + true <br>`);
document.write(`typeof (Infinity) <br>`);
document.write(`1 == '1' <br>`);
document.write(`1 === '1' <br>`);


// **************************************

let x1 = "Welcome to Orange";
let x2 = "Jordan";
document.write(x1.toUpperCase() + "<br>");
document.write(x1.substr(8,2).toUpperCase() + "<br>");
document.write(x1.replace("Welcome" , "Hello") + "<br>");
document.write(x1.replace("Orange" , "orange") + "<br>");
document.write(x1.replace("Welcome to Orange" , "17") + "<br>");
document.write(x1.replace("Orange" , `"Orange"`) + "<br>");
document.write(x1 +" " +x2 + "<br>");


// **************************************

let str = "cactus";
document.write(str[0]+ str.slice(1).replace("c" , "*") + "<br>");




// ************************************** 
// **************************************
// **************************************
// **************************************
// **************************************


let age = 27;
if (age > 18){

    document.write("You are an adult <br>")
}


let score = 45;
if ( score < 50){

    document.write("You failed the test <br>")
}


let name = "Johan";
if ( name == "Johan"){

    document.write("Hello, John <br>")
}

let day1 = "saturday";
let day2 = "sunday";
let day = "monday"

if ( day != "saturday"|| "sunday"){

    document.write("It's a weekday <br>")
}

let num = 4 ; 

if ( num % 2 == 0){

    document.write("The number is even <br>")

}

let char = "a" ; 

if ( typeof a == String){

    document.write("It's a letter <br>")

}


let list = [1, 2, 3]
if(typeof list == array){

    document.write("It's an array")
}

let x = 5 ;
if(x>0){
    document.write("x is a positive number")
}

let y = -5 ;
if(x<0){
    document.write("y is a negative number")
}

let z = 9 ; 

if ( z % 3 == 0){

    document.write("z is a multiple of<br>")

}


let gpa = 3.5 ;
if(gpa>=3){
    document.write("Congratulations, you have a good GPA!")
}

let password = "mypassword123";

if (password.length>7){
document.write("Your password is strong")
}


let age11 = 30;

if(age11>=18 && age1<=65){
document.write("You are of working age")
}

let color = "red";

if (color == "red" || color == "green" || color == "blue"){
document.write("color is a primary color <br>")
}

let n = 100;
 if(isNaN(n)){
	document.write(n + " is not a number <br>");
 }else{
	document.write(n + " is a number <br>");
 }