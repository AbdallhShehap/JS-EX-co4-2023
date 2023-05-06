let Input= { name: "Adam", age: 25, gender: "male" };

let sum = " " 
for (const key in Input) {
  
       sum = sum + Input[key] + " "
    }
    console.log(sum); 


    let person =  { name: "Adam", age: 25 };
   person.gender =  "male";
   console.log(person);


   let person1 =  { name: "Adam", age: 25 };
   person1['gender'] =  "male";
   console.log(person1);
    
  console.log(person1.name);
  console.log(person1["name"]);

  let person1 =  { name: "Adam", age: 25 };

  
 let summ= "";
  for (const key in person1) {
      
    summ += key + " " + person1[key]
    
}

console.log(summ);


let person3 =  { name: "Adam", age: 25, gender :  "male"  };
 
console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log(Object.entries(person3));


let person4 =  { name: "Adam", age: 25 }
let person5=  { gender: "male" };

console.log(Object.assign(person4,person5));

let person6 =  { name: "Adam", age: 25 }




console.log(Object.seal(person6));
person6.age=24


console.log(Object.freeze(person6));
person6.age=22





let person7 =  { nam: "Adam", ag: 25, gende :  "male", brothers: 25 };
let person8 = { name: "tarq", age: 25, gender :  "male"}

let sumt= [];
 for (const key in person7) {
     
   sumy = key 
   sumt.push(sumy)
}

let ccc = Object.assign(person7 , person8) 
console.log(ccc); 
console.log(sumt);

let v = Object.keys(person7)
console.log(v);
console.log(v.length);

let xz= Object.toString(person8);
console.log(xz);
// String.toUpperCase()



 person7 =  { nam: "Adam", ag: 25, gende :  "male", brothers: null };


function removeNullProperties(obj) {
    let sumtt= [];
    for (const key in person7) {
        if (obj[key] !== null){
            sumtt[key]= obj[key]
        }
    }
    return sumtt;
}

console.log(removeNullProperties(person7));
  

let vc = Object.keys(person7) 
console.log(vc);
console.log(vc.sort()); 