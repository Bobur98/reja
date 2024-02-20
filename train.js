// F-TASK
function findDoublers(str) {
  let doubles = [];
  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (doubles.includes(char)) {
          return true; 
      } else {
          doubles.push(char); 
      }
  }
  
  return false;
}

console.log(findDoublers('hello'));

// // E-TASK

// function getReverse(str) {
//     let reversedStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     return reversedStr;

//   }

//   console.log(getReverse('hello'));


// // D-TASK
// function checkContent(str1, str2) {

//   const sortedStr1 =  str1.split('').sort().join("");
//   const sortedStr2 =  str2.split('').sort().join("");
  
//   return sortedStr1 === sortedStr2;
// }

// console.log(checkContent('mitgroup','groupmit'));

// // C-TASK

// const moment = require("moment");
// let time = moment().format('LT')
// class Shop {
    
//     constructor(non, lagmon, cola){
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola
//   }
  
  
//   qoldiq () {
//     return `hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
//   }

//   sotish (item, amount) {
//     // non
//      if(item === 'non'){
//        if (this.non >= amount){
//             this.non -= amount;   
//         } 
//     }

//      if(item === 'lagmon') {
//        if (this.lagmon >= amount) {
//             this.lagmon -= amount;
//      }
//     }
//      if(item === 'cola') {
//       if (this.cola >= amount) {
//             this.cola -= amount;
//         } 
//      }
     
//      return `hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`

//   }


//   qabul (item, amount) {
//     // non
//      if(item === 'non'){
//        this.non += amount
//      }

//      if(item === 'lagmon'){
//         this.lagmon += amount
//      }

//      if(item === 'cola'){
//         this.cola += amount
//      }
//      return `hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`

//   }


// }

// let savdo = new Shop(6,5,2)
// console.log(savdo.qabul('non', 5));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// // B-TASK

// function countDigits(str) {
//     let count = 0;
//     for(let i = 0; i <= str.length; i++) {
//        if(parseInt(str[i])) count++
//     }
//     return count

    
// //   const numbers = str.replace(/[^0-9]/g, '')
// //   return numbers.length
// }

// console.log(countDigits('seff56fes11'));


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// // CHALLENGE TASK

// const animal_list = ['fox', 'ant', 'bird', 'lion', 'wolf', 'deer', 'bear', 'frog', 'hen', 'mole', 'duck', 'goat', 'dog', 'cat', 'bat', 'cock', 'cow'];

// function findAnimals(txt) {
//     const foundAnimals = [];
//     for (const animal of animal_list) {
//        let isAnimal = true;
//        for (const char of animal) {
//         if (!txt.includes(char)){
//             isAnimal = false;
//             break;
//         }
//        }
       
//        if(isAnimal){
//            foundAnimals.push(animal)
//         } 

//     }
//     return foundAnimals;

// }

// const javob = findAnimals('ablnitrodn');
// console.log("javob", javob);

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// // A-TASK
// let count = 0;

// function countLetter(letter, word){
//   if(typeof letter !== 'string' || letter.length > 1) console.log('please enter a single letter!');
//   for(let i = 0; i <= word.length; i++){
//      if (letter === word[i]) count++
//   }
  
//   console.log('count:', count);
// }

// countLetter('a', 'masalan');


// // callback 
// console.log('Jack Ma maslahatlari');
// const list = [
//    "yaxshi talaba bo'ling",
//    "to'gri boshliq tanlang va koproq hato qiling",
//    "uzingizga ishlashingizni boshlang",
//    "yoshlarga investitsiya qiling",
//    "endi dam oling",  
//    "endi kech"
// ];

// function maslahatBering(a, callback) {
//    if (typeof a !== "number") callback('insert a number', null);
//    else if (a <= 20) callback(null, list[0]);
//    else if (a > 20 && a <= 30) callback(null, list[1]);
//    else if (a >= 30 && a <= 40) callback(null, list[2]);
//    else if (a >= 40 && a <= 50) callback(null, list[3]);
//    else if (a >= 50 && a <= 60) callback(null, list[4]);
//    else {
//     setTimeout(function(){
//         callback(null, list[5])
//     },5000)
//    }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob: ', data)
//     }
// });

// // console.log('passed here 1'); 

// // async functions

// /* 
// core functionlar async ichida ishlamaydi, misol uchun setIntervel, setTimeout, lekin async function ichida Promise class bn ishlaydi
// */ 
// async function maslahatBering(a){
//     if (typeof a !== 'number') throw new Error('Insert a number');
//     else if (a <= 20);
//     else if ( a > 20 && a <= 20) return list[1];
//     else if ( a > 30 && a <= 40) return list[2];
//     else if ( a > 40 && a <= 50) return list[3];
//     else if ( a > 50 && a <= 60) return list[4];
//     else {
//         return list[5]
//     }
// }

// console.log('passed her 0');
// // then/catch
// maslahatBering(65)
// .then ((data) => {
//     console.log("javob:", data)
// })
// .catch((err) => {
//     console.log('ERROR:',err)
// })

// console.log('passed her 1');

// // async/await

// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(30);
//     console.log(javob);
//     javob = await maslahatBering(40);
//     console.log(javob);
// }

// run()