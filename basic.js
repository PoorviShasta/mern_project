// let str = "I have 3 classes for 3 hrs";


// let arr = str.split(" ");
// console.log(arr);


// let nums = arr.filter(item => !isNaN(item));
// console.log(nums);


// let finalNums = nums.map(Number);


// let total = finalNums.reduce((a, b) => a + b, 0);

// console.log(finalNums);
// console.log(total);




let str = "I bought 2 pens for 15.5 each and 3 books for 40";
let arr = str.split(" ");
console.log(arr);
let nums = arr.filter(item => !isNaN(item));
console.log(nums);
let finalNums = nums.map(Number);
let total = finalNums.reduce((a, b) => a + b, 0);
console.log(finalNums);
console.log(total);

