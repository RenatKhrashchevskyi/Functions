
// function with one parametr

let drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
      console.log(i +  ' =^.^=');
    }
};
drawCats(10); // argument 10


// function with two parameters

let printManyItems = function (howManyTime, whatToDraw) {
    for (let i = 0; i < howManyTime; i++) {
        console.log(i + ' ' + whatToDraw)
    }
};
printManyItems(7, 'Cats');// arguments (7, 'Cats)



// Returning a value from a function
let double = function (number) {
    return number * 3;
};

console.log(double(3));


// Calling a function as a value
let double1 = function (number) {
    return number * 2;
};

console.log(double1(5) + double1(6));

// Calling a function as a value
let double2 = function (number) {
    return number * 2;
};

console.log(double2(5) + double2(6));


// Calling a function as a value
let double3 = function (number) {
    return number * 2;
};

console.log(double3(double3(3))); // double3(double3(3)) => double3(6)



//Function for selecting a random word


let randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];

let pickRandomWord1 = function (words) {
    return words[Math.floor(Math.random() * words.length)];

};
console.log(pickRandomWord1(randomWords));


//Making the generator an insulting  function 


// let generateRandomInsult = function (pickRandomWord) {
//     let pickRandomWord = function (words) {
//         return words[Math.floor(Math.random() * words.length)];
//     }
//     let randomBodyParts = ["глаз", "нос", "череп"];
//     let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

//     // Соединяем случайные строки в предложение:
// let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) +
// " " + pickRandomWord(randomWords) + "!!!";
// return randomString; 
    
// };

// console.log(generateRandomInsult());



//Early exit from the function by return

let fifthLetter = function (name) {
    if (name.length < 5){
        return;
    }
return 'Fifth letter your name: ' + name[3] + '.';
};
console.log(fifthLetter('Renat'));


//using return many times instead of if...else

let medalForScore = function (score) {
    if (score <= 3) {
        return 'Bronz';
    } if (score < 7) {
        return 'Silver';
    } 
    return 'Gold';
};

console.log(medalForScore(4));

//shorter way to create a function

let yourName = function(name) {     // <-- longer
    return name * 2;
};

//shrter

function yourName1 (name) {
    return name * 2;
};


/* HOMEWORK
===============
*/


let multiply = function(a, b) {
    return a * b;
}

let add = function (a, b) {
    return a + b;
}

console.log(multiply(add(36325,9824), 777));



//task 2




//Do the arrays match?


let areArraysSame = function (argument1, argument2) {
    for (let i = 0; i < argument1.length; i++) {
      if (argument1[i] !== argument2[i] || argument1.length !== argument2.length) {
      return false;
    } else {
      return true;
    }
    }
  }
  
  // test
  console.log(areArraysSame([1,2,3], [1,2,3]));

  


