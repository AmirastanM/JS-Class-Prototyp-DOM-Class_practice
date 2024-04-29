"use strict";



// function sumOfOddNums(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         if (item % 2 == 1) {
//             sum += item
//         }
//     }
//     console.log(sum);
// }


// function sumOfEvenNums(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         if (item % 2 == 0) {
//             sum += item
//         }
//     }
//     console.log(sum);
// }

// let nums = [1, 4, 5, 6, 9, 8];

// sumOfOddNums(nums)
// sumOfEvenNums(nums)

// function checkOddNum(num) {
//     return num % 2 == 1;
// }
// function checkEvenNum(num) {
//     return num % 2 == 0;
// }


// function sumOfNumsByCondition(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item
//         }
//     }
//     console.log(sum);
// }


// let nums = [1, 4, 5, 6, 9, 8];
// sumOfNumsByCondition(nums, checkOddNum)
// sumOfNumsByCondition(nums, checkEvenNum)
// sumOfNumsByCondition(nums, m => m % 2 == 0)
// sumOfNumsByCondition(nums, m => m > 5)


// let nums = [1, 4, 5, 6, 9, 8];

// let result = nums.filter(m => m > 5);
// console.log(nums)
// console.log(result)

// let result = nums.find(m => m > 5);
// console.log(result)

// let result = nums.findIndex(m => m > 5);
// console.log(result)



// ---- TS


// class Animal {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// let animal = new Animal(100, 200);

// console.log(animal.height)


// class Bird extends Animal {
//     constructor() {
//         super(100, 200)
//         this.name = "Devequshu";
//     }
//     getName(t) {
//         console.log("test")
//     }
// }

// let bird = new Bird();
// console.log(bird.name)
// bird.getName(100)

// console.log(animal.width)


// let name = "sasa";

// let surname = new String();
// surname = "salam"
// console.log(surname)

// let isMarried = new Boolean();
// isMarried = true;
// console.log(isMarried)


// class Test {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Test.prototype.surname = "Surname for test";
// Test.prototype.getName = function () {
//     console.log("this is a test name")
// }

// let test = new Test("sala,");

// console.log(test.surname)
// test.getName()

// String.prototype.customContains = function (searchText) {
//     return this.includes(searchText)
// }

// let name = "Reshad";

// let surname = "Agayev";

// console.log(name.customContains("c"))
// console.log(surname.customContains("v"))


// let date = new Date();

// // console.log(date)

// let year = date.getFullYear();
// let month = date.getMonth();

// let result = `${month + 1} - ${year}`;

// console.log(result)

// let data = Math.sqrt(64)

// console.log(data)



// ------- DOM


// let elems = document.getElementsByTagName ("h1");

// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     console.log(element)
// }

// let elem = document.getElementsByClassName("test");

// console.log(elem)


// let elem = documet.getElementById("products");
// console.log(elem);



// let elems = document.querySelectorAll("#products h1");
// elems[1].style.backgroundColor = "Red"


// for (const item of elems) {
//     item.style.backgroundColor = "Red"
// }


let h1 = document.querySelector("h1");

// console.log(h1.innerText)

// console.log(h1.innerText)

// h1.innerText = "<span>Reshad bey</span>"
// h1.innerHTML = "<span>Reshad bey</span>"


// h1.style.color = "Teal";
// h1.style.margin = "200px";


// h1.className = "active";

// h1.classList.add("active");
// h1.classList.remove("product")

// console.log(h1.classList.contains("active"))


// console.log(document.querySelector("#products ul li:nth-child(2)"));


// h1.setAttribute("id", "text")
// console.log(h1.getAttribute("id"))
// console.log(h1.hasAttribute("id"))

let button = document.querySelector(".add-product");

button.addEventListener("click", function () {
    // alert("Hello World")
    this.style.backgroundColor = "Magenta";

    h1.style.backgroundColor = "Green";
    h1.style.color = "White";
    h1.style.width = "200px";
    // h1.innerText = "Salam Fatime xanim"
    let btnText = this.innerText;
    this.innerText = h1.innerText;
    h1.innerText = btnText;

})










