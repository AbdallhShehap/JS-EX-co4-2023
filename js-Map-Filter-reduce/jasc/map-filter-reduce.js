let arr= [" injustice", "  SuperMan", "  Batman ", " flash "];


let Narr= arr.map(function cleanNames(element){

    return element.trim()
})
console.log(Narr);



const miles = [10, 20, 30, 40];

let Nmiles = miles.map(function totalDistanceInKilometers(element){
    return element * 1.609344
} )
console.log(Nmiles);


let arrayelements = [1, 2, 3, 4, 5]

let Narrayelements= arrayelements.map(function sum(element){

    return element * element
})

console.log(Narrayelements);



function summ (element){
    
    let sum = 0

    for(i=0 ; i< Narrayelements.length; i++){
        
        sum += Narrayelements[i]
    }

    
    let average = sum / Narrayelements.length
    
    console.log(average);
}
summ()


// 4. Create a new array using the map function whose each element is equal to the original
// // element plus 4.


const numbers = [1, 2, 3, 4, 5];

let Nn = numbers.map(function elemantplusfor(element){
    return element + 4
} )
console.log(Nn);




const numm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArr2 = filter(numm, function(elemen){
    return elemen % 2 == 0
})

let sumeven = []

let naryy = myArr2.map(function sumeven (eleme){
    return sumeven += naryy[eleme]
})
console.log(naryy);


let words = ['apple', 'banana', 'cherry', 'date'];

let stword = words.toString()

let result = stword.toUpperCase();


let net = result.split(" ");

console.log(net);



const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'} ]

    let newhero = heros.map((item , index) => {

        let newobj = { hero: item.name, power: item.power , id: index}

        console.log(newobj);
    })



    const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

    let result8 = inputWords.filter((item)=> item.length >= 7 );
    console.log(result8); 




    const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let oddNun = numbers9.filter((item)=> item % 2 != 0);

    console.log(oddNun);

    let divisbly2or5 = numbers9.filter((item)=> item%2==0 ||  item%5==0 )
    console.log(divisbly2or5);

    let divisbly3 = numbers9.filter((item)=> item % 3 == 0 ).map((item)=> item **2)
    console.log(divisbly3);


    let sumdivisbly5 = numbers9.filter((item)=> item %5 ==0).map((item)=>item **2).reduce((pre , curr ) => pre + curr);
    console.log(sumdivisbly5);


    let nums = [11, 22, 33, 46, 75, 86, 97, 98];

    let squarnum = nums.filter((item)=> item % 2 == 0 ).map((item)=> item ** 2 );
    console.log(squarnum);

    let sum10 = nums.reduce((pre, curr)=> pre + curr);
    console.log(sum10);




    let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];

    let fillCountries = countries.filter((item)=> item[0] !== "U" && item[0] !== "R"  )
    console.log(fillCountries);

    let uppercaseCountries = fillCountries.map((item)=> item.toUpperCase())
    console.log(uppercaseCountries);

    let tot = uppercaseCountries.reduce((pre,curr)=> pre + curr.length , 0)
    console.log(tot);


    const numbers12 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
    let graterthan50 = numbers12.filter((item)=> item > 50)
    console.log(graterthan50);
