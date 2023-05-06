myarray= ["Coding", "Academy", "By", "Orange"];

// Output: [“Coding”, “Academy”, “By”, “Orange”, “Jordan”]
newArr = myarray.push("Jordan")
console.log(myarray)

// ● Output: [“Coding”, “Academy”]
console.log(myarray[0] , myarray[1])

// ● Output: [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”]
myarray.unshift("Welcome")
newArr2 = myarray.unshift("To")

console.log(myarray)

// ● Output: [“Academy”, “By”, “Orange”]
myarray.pop();
console.log(myarray)

// ● Output: “Coding Academy By Orange”

// ● Output: [“Coding”, “Academy”, “By”, “Orange”]
myarray= ["Coding", "Academy", "By", "Orange"];

console.log(myarray)
// ● Output: [“Coding”, “Orange”]

console.log(myarray[0] , myarray[3])


// #######################################################

// array.push: بضيف عنصر بالأخر داخل الأريه 
// array.unshift: بضيف عنصر بالأول داخل الأريه


// array.pop(): بتشيل عنصر بالأخير من عناصر الأريه 

// array.shift: بتشيل عنصر بالأول من عناصر الأريه



var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// أ. قم بإزالة العنصر الأخير من مجموعة الخضار.
vegetables.pop();
console.log(vegetables);

// ب. قم بإزالة العنصر الأول من مجموعة الفاكهة.
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

fruit.shift();
console.log(fruit);

// ج. ابحث عن فهرس كلمة "برتقالي".

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

fruit.indexOf("orange");
console.log(fruit);


// د. أضف هذا الرقم إلى نهاية مجموعة الفاكهة.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

fruit.push(1);
console.log(fruit);



// ه. أوجد طول مجموعة الخضار.
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

x= vegetables.length;
console.log(x)

// F. أضف هذا الرقم إلى نهاية مجموعة الخضار.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.push(1)


console.log( vegetables)


// ز. ضع المصفوفتين معًا في مصفوفة واحدة. الفاكهة أولا. أطلق على المصفوفة الجديدة "طعام".

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

food = fruit.concat(vegetables)
console.log(food)
// ح. قم بإزالة عنصرين من صفيفك الجديد بدءًا من الفهرس 4.

food.splice(4,2);
console.log(food)
// أنا. اعكس صفيفك.
food.reverse();
console.log(food)
// ي. تحويل المصفوفة إلى سلسلة.
x = food.join(" ")
console.log(x)



var Array= [1, 2, 3, 4, 5];

Array.forEach(arr);

function arr(item , index ){
    console.log( item);
}

const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.map(myFunction);

function myFunction(item) {
  return item + item;
}
console.log(newArr)



const number = [1, 2, 3, 4, 5];

even = number.filter(myFunction);

function myFunction(item) {
  return item %2 == 0;
}

console.log(even)



var numbe = [1, 2, 3, 4, 5];

var x = numbe.reduce(function(t1 , t2){

    return t1 + t2
})
console.log(x)


var s = ["apple", "banana", "cherry"];

z = s.sort();
console.log(z)
c = s.reverse()
console.log(c)


a1 = [1, 2, 3];
a2 =  [4, 5, 6];

v = a1.concat(a2);
console.log(v)



var mArr = [1, 2, 3, 4, 5, 6];
var b1 = mArr.slice(0,2)
var b2 = mArr.slice(4,6)
console.log(b1.concat(b2))


var mArr = [1, 2, 3, 4, 5]
var b1 = mArr.splice(0,1);
var b2 = mArr.splice(1,5)
console.log(mArr)
let index = mArr.indexOf(2)
console.log(index)

var mArr = [1, 2, 3, 4, 5]
let c1= mArr.join();
console.log(c1)
let c2 = c1.split(" ")
console.log(c2)


var mArr = [1, 2, 3, 4, 5]

console.log(mArr.length)

for(i=0 ; i<mArr.length ; i++){
    console.log(mArr[i])
}

var mArr = [1, 2, 3, 4, 5]


for(i=1 ; i<mArr.length+1 ; i++){
    console.log(mArr.indexOf(i))
}

let result = Array.isArray(mArr);
console.log(result)


let Input=  "abc";
myArr = Array.from(Input);
console.log(myArr)


let input = "1, 2 , 3";
console.log(Array.of(input))


var mArr = [1, 2, 3, 4, 5];
mArr.fill("0",0,3)
console.log(mArr)

var mArr = [1, 2, 3, 4, 5];
mArr.copyWithin(1,0,1)
mArr.copyWithin(2,0,1)

console.log(mArr)


// Functions

// function convertto(){

//     ss= "Orange Jordan"
// Array = ss.split(" ")
// console.log(Array)

// }
// convertto()


// function convertto(){

// var y = 9776807777 ;
//  y.toString() 

// for(i=0; i < 7 ;i++ ){
    
//     y.replace(y[i] , "*");
// } 
// console.log(y)

// }
// convertto()








// // fruit.pop();
// // console.log(fruit)


