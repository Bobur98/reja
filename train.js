// B-TASK

function countDigits(str) {
    let count = 0;
    for(let i = 0; i <= str.length; i++) {
       if(parseInt(str[i])) count++
    }
    return count

    
//   const numbers = str.replace(/[^0-9]/g, '')
//   return numbers.length
}

console.log(countDigits('seff56fes11'));

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