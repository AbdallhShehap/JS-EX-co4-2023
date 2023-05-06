


// 1. Use a for loop to print numbers from 1 to 10 using for


for(i1=0 ; i1 < 11 ; i1++ ){
    console.log(i1)
}


// 2. Use a while loop to print numbers from 1 to 10 using while.

let i2=0;

while(i2 <= 10){
    console.log(i2)

    i2++;
}


// 3. Use a for loop to iterate through an array and print each element.

let   number3 = [1 , 2 ,3 ,4 ,5 ];

let arryNum3 = number3.length;

for(i3=0 ; i3 < arryNum3 ; i3++){
    console.log(number3[i3]);
}


// 4. Use a for loop to print even numbers from 0 to 10.

let even4 = [1,2,3,4,5,6,7,8,9,10];

let arryEven4 = even4.length;

for(i4=0 ; i4 < arryEven4 ; i4++){
    if(even4[i4] % 2 == 0 ){
        console.log(even4[i4])
    }
}


// 5. Use a for loop to print the sum of numbers from 1 to 10.

let number5 = [1,2,3,4,5,6,7,8,9,10];

arryNun5 = number5.length;

let sum5 = 0; 

for(i5=0 ; i5 < arryNun5 ; i5++){
   sum5 = sum5 + number5[i5]
}
console.log(sum5);


// 6. Use a for loop to find the largest number in an array.

let number6 = [1,2,3,4,5];

arryNum6 = number6.length;

let max6 = number6[0]

for(i6=0 ; i6 < arryNum6 ; i6++){

    if(max6<number6[i6]){
        max6 = number6[i6]
    }

}
console.log(max6)


// 7. Use a for loop to find the smallest number in an array.


let number7 = [1,2,3,4,5];

arryNum7 = number7.length;

let min7 = number7[0];

for(i7=0; i7< arryNum7 ; i7++){
    if(min7 > number7[i7]){
        min7 = number7[i7]
    }
}
console.log(min7)



// 11.Use a for loop to find the average of numbers in an array

let number11 = [1,2,3,4,5];

arryNum11 = number11.length;

let sum11 = 0 ; 

for(i11=0; i11< arryNum11 ; i11++){

    sum11 = sum11 + number11[i11];
  
}
let average11 = sum11 / arryNum11
console.log(average11)



// 12.Use a for loop to find the factorial of a number.

let input12 = 5;
let factor12 = 1 ;

 for(i12=1 ; i12<= input12 ; i12++){

        factor12 = factor12 * i12;
      
 }
 console.log(factor12)

// 13.Use a for loop to print the Fibonacci sequence up to a given number.

const n13 = 10;

let fibonacci = [0, 1];

for (let i13 = 2; i13 <= n13; i13++) {
  fibonacci[i13] = fibonacci[i13-1] + fibonacci[i13-2];
}

fibonacci = fibonacci.filter(num13 => num13 <= n13);

console.log(fibonacci.join(' ')); 


// 14.Use a for loop to print the prime numbers up to a given number.

let input14 = 20;
console.log(2)
for(i14=2 ; i14<= input14 ; i14++){
    if(i14 % 2 != 0){
        console.log(i14)
    }
}


// 15.Use a for loop to print a multiplication table for a given number .
 let input15 = 5 ;

 for( i15=1; i15<=10 ; i15++){
   console.log(`5x${i15}= ${input15*i15}`)
 }


//  16.Use a for loop to print the elements of a 2D array .

 array16 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let array16Num = array16.length ; 

for(i = 0 ; i < array16Num ; i++ ){
    for(j = 0 ; j < array16[i].length ; j++){
        console.log(array16[i][j])
    }
}


// 17.Use a for loop to print the elements of an array in reverse order.

let array17 = [1,2,3,4,5] ;

ArraNum17= array17.length - 1;

for(i=ArraNum17 ; i >=0 ; i-- ){
    console.log(array17[i])
}


// 18.Use a for loop to print the elements of an array in a specific range.


array18= [1, 2, 3, 4, 5], 2, 4;

let arrayNum18 = array18.length;

for(i=2 ; i < arrayNum18 ; i++){
    console.log(array18[i])
}




// 19.Use a for loop to print the elements of an array with a specific step.

array19= [1, 2, 3, 4, 5], 2;

let arrayNum19 = array19.length;

for(i19=0 ; i19 < arrayNum19 ; i19=i19+2){
        console.log(array19[i19])
     }



// 20.Use a for loop to check if a number is in an array.

array20 = [1, 2, 3, 4, 5] ;

let input20 = 4 ;

let arrayNum20 = array20.length



// for(i=0 ; i < arrayNum20 ; i++ ){

//     if( array20.includes(input20)  ){

//         console.log("true")
//         break;
//     }
   
// }

for(i=0 ; i < arrayNum20 ; i++ ){

    if( array20[i]==input20  ){

        console.log("true")
    
    }
   
}




// 21.Use a for loop to find the frequency of a number in an array.

 array21 = [1, 2, 1, 3, 2, 1];

let input21 = 1;

let frequency = 0;

array21Num = array21.length

for (let i = 0; i < array21Num ; i++) {
  if (array21[i] === input21) {
    frequency++;
  }
}
console.log(frequency);




