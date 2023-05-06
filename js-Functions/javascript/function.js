function xx154(){
    let Input = "Orange Jordan";

    let nwe = Input.split(" ");
    
    console.log(nwe)
  
}

xx154()





// 2. Write a function that converts the first seven digits of a mobile phone number to a hidden form.
function xx24(){
    let Inpu = 9776807777;
    let x= Inpu.toString();
    
    console.log("*******" + x.slice(7))  
}
xx24()



// 3. Write a function that converts an email address to a hidden form.

// let email = `orange_academy@orange.jo`;
// let N1 = email.slice(0,email.indexOf("@"));
// let m1 = N1.slice(0,N1.length/2)
// console.log(m1+"...@orange.jo");


function xx233(){
    let email = `orange_academy@orange.jo`;
let N1 = email.slice(0,email.indexOf("_"));

let N2 = email.slice(8,email.indexOf("j"));

console.log(N1 + "..."+ N2 + "jo" );

let email1 = `coding academy by orange`;

console.log(email1.replace("c","C" ) );

let email2 = `coding academy by orange`;
// let N21 = email2.slice(0,1);
// let nn = N21.replace("c","C")
// console.log(nn+);

console.log("C"+ email2.slice(1,7)+ " "+ "A"+ email2.slice(8,17)+ " " + "O" + email2.slice(19) );
}
xx233()




function xx11(){
    let aa = 92485; 



    let zz=  aa.toString()
    sss =zz.split("").reverse().join("")
    
    console.log(sss);  
}
xx11()






function xx222(){
    let a = 3;
    let b = 4;
    let z ; 
    
    z = a;
    a = b;
    b = z;
    console.log(a);
    console.log(b);
    
     a = 3;
     b = 4;
     a = a + b ;
     b = a - b ; 
     a = a - b ; 
     console.log(a);
    console.log(b);
       
}

xx222()




function xx22(){
    
let q = "Orange";
qq = q.replace("n","") ;
console.log(qq);

}

xx22()



function xx21(){
    
 let ds = `lora`;
let dd = `inge`;
rr1 = ds.slice(1);

rr2 = dd.slice(1)
console.log(rr1 + rr2);

}


xx21()


function xx2211(){
    let ddd = "orange";
   az=  ddd.split("") 
    if (az[0].includes("o")){
        console.log( 'true');

    }


}

xx2211()

function xx2211(){
    let ddd = "orange";
   az=  ddd.split("") 
    if (az[5].includes("z")){
        console.log( 'true');

    }else{
        console.log('false');
    }


}

xx2211()


function con(){
    let input = "Coding Academy by Orange"

    let Ninput = input.split(" ") 
    
    console.log(Ninput);
}
con()

function sor(){
    let alph = 'orange';
    co = alph.split("")
    ca= co.sort().join("");
    console.log(ca);
}
sor()


// 1.Create a function that will display the smallest value in the array.



function smollest(){

    let Array = [30, 45, 60, 7]

    let assum = Array[0];

    Aa= Array.length
    
    for(i=0;i<Aa ; i++){
        if(assum > Array[i]){
            assum = Array[i]
        }
    }
     console.log(assum);

}
smollest()




function AlphabeticalOrder(){
    qw = "hello";
    ww = qw.split("").sort().join("");

    
    console.log(ww);
}
AlphabeticalOrder()


function factorial(){

    input = 8;
    for(i=1; i < 8 ;i++){
        input = input * i
    }
    console.log(input);
}
factorial()


function oddOrEven(){
    input = 9
    if(input % 2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
    return
}
oddOrEven()


function evenNum(){
    Arrm = [1, 2, 3, 4, 5, 6,7,8,9]

    Arr=[];

    let len = Arrm.length
    for(i=0; i<len; i++){

        if(Arrm[i] % 2 == 0){
            Arr.push(Arrm[i]);
        }
    }

    console.log(Arr);
    return Arr;
}
evenNum()




function numbersOnly(){

    let all = ['Ayham', 3, 7, 'Alaa', 13, 'coding']
    NUMB = []
    STRE = []
    for(i=0; i<all.length; i++){

        if( isNaN(all[i]) ){

            STRE.push(all[i])


        }else{
            NUMB.push(all[i])
        }
    }
    console.log(NUMB)
}
numbersOnly()



function addUp(){

    input = 8;
    for(i=1; i < 8 ;i++){
        input = input + i
    }
    console.log(input);
}
addUp()



function minMaxLengthAverage(){
   MyAr = [7, 13, 3, 77, 100];

   newMyAr = [];

   let min = MyAr[0]
   let max = MyAr[1]
   let len = MyAr.length
   let sum = 0

   for (i=0; i<MyAr.length; i++){

    sum = sum + MyAr[i]}

    for (i=0; i<MyAr.length; i++){

        if(min > MyAr[i]){
            min=MyAr[i];
    
        }else(max < MyAr[i])
            max=MyAr[i]; 
    }
   

   
   let Average = sum / len ; 

   newMyAr.push(min);
   newMyAr.push(max);
   newMyAr.push(len);
   newMyAr.push(Average);

   console.log(newMyAr);
    return newMyAr;
}
minMaxLengthAverage()

// "I","II","III","IV","V","VI","VII","VIII","IX" 1989
function romanNumbers(){
input = 1989;
z = input.toString();

z1= z.replace("1","I").replace(/9/g,"IX").replace("8","VIII")

console.log(z1);
}
romanNumbers()

function countWords(){
var st = 'hello from CodingAcademy!'
arr = st.split(" ")
console.log(arr.length);

}
countWords()


function MultiplyByLength(){
arr = [4,2,5];
z = arr.length
newarr=[]
for(i=0; i<z; i++){
   x = arr[i]*z
   newarr.push(x)
}
console.log(newarr);
}
MultiplyByLength()


function checkEnding (){
    st1 = "CodingSchool"
    st2 =  "Ac"
    a = st1.slice(10,12);
   
    if(a == st2){
        console.log(true);
        return true
    }else{
        console.log(false);

        return false
    }

}
checkEnding ()


function doubleChar(){
    st= 'Coding'
    c= st.split(" ")
   
    re = c.toString("")
    re0= re[0].repeat(2) 
    re1= re[1].repeat(2) 
    re2= re[2].repeat(2) 
    re3= re[3].repeat(2) 
    re4= re[4].repeat(2) 
    re5= re[5].repeat(2) 

    console.log(re0 + re1 + re2 + re3 + re4 + re5);
}
doubleChar()




// 14. Return the index location of an element from a given array. First argument is the array
// you'd like to search and the second one is the element (either string/number) to look for'




function getAbsSum(){
    ab= [-1, -3, -5, -4, -10, 0,4];

    sum = 0
    for(i=0; i< ab.length; i++){
        sum = sum + ab[i] 
    
    }
    sum = sum + (sum * -2)
    console.log(sum);

}

getAbsSum()