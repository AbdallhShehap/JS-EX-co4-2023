let myP = document.querySelector("p");
// let span = document.createElement("span");
// let arr = myP.innerText.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length >= 8) {
//     arr[i] = `<span style="background-color:yellow">${arr[i]}</span>`;

//     console.log(arr[i].innerHTML);
//   }
// }
// myP.innerHTML = arr.join(" ");

// let link = document.createElement("a");
// link.setAttribute("href", "https://www.google.com/");
// link.textContent = "Google";

// document.body.appendChild(link);


// let x = myP.innerText.split(".")


// for (let i = 0; i < x.length; i++) {

//     x[i] = `${x[i]}  <br>`
// }
// myP.innerHTML = x.join(" ") 
// console.log(x);



// 04 ###############
let header = document.querySelector("h1")

let y = myP.innerText.split(" ")
console.log(y.length);

let headerCount = document.createElement("h3")
headerCount.innerHTML = ` ${y.length}`
header.after(headerCount)

