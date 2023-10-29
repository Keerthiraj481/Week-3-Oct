// 11.Write a JavaScript function that reverses the elements in an array without using the built-in reverse method.

console.log(`Prblm No. : 11`);
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
const arr1 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr1));
const arr2 = ["apple", "banana", "cherry"];
console.log(reverseArray(arr2));
console.log(`<------------------------>`);



// 12.Write a JavaScript function that takes an array of numbers from 1 to N (with one number missing) and returns the missing number.


console.log(`Prblm No. : 12`);
function findMissingNumber(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - actualSum;
}
const arr3 = [1, 2, 4, 5, 6];
console.log(findMissingNumber(arr3, 6));
const arr4 = [10, 11, 12, 14];
console.log(findMissingNumber(arr4, 14));
console.log(`<------------------------>`);



// 13.Write a JavaScript function that takes two arrays and returns an array containing elements that are common to both arrays.


console.log(`Prblm No. : 13`);
function findIntersection(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const intersection = [...set1].filter((element) => set2.has(element));
  return intersection;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findIntersection(array1, array2));
console.log(`<------------------------>`);



// 14.Write a JavaScript function that checks if a given substring exists within a larger string.

console.log(`Prblm No. : 14`);
function containsSubstring(str, substring) {
  return str.includes(substring);
}
console.log(containsSubstring("Hello, world!", "world"));
console.log(containsSubstring("JavaScript is fun", "Python"));
console.log(`<------------------------>`);




// 15.Write a JavaScript function that takes two sorted arrays and merges them into a single sorted array.


console.log(`Prblm No. : 15`);
function mergeAndSortArrays(array1, array2) {
  const mergedArray = [...array1, ...array2];
  return mergedArray.sort((a, b) => a - b);
}
const array3 = [1, 3, 5];
const array4 = [2, 4, 6];
console.log(mergeAndSortArrays(array3, array4));
console.log(`<------------------------>`);


// 16.Write a JavaScript function that replaces all occurrences of a substring with another string in a larger string.

console.log(`Prblm No. : 16`);
function replaceAllOccurrences(str, find, replace) {
  return str.split(find).join(replace);
}
console.log(replaceAllOccurrences("This is a test. It's a simple test.", "test", "example"));
console.log(`<------------------------>`);



// 17.Write a JavaScript function to generate the first N elements of the Fibonacci sequence.

console.log(`Prblm No. : 17`);
function generateFibonacci(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci.slice(0, n);
}
console.log(generateFibonacci(6));
console.log(generateFibonacci(8));
console.log(`<------------------------>`);



// 18.Write a JavaScript function that finds and returns the second largest element in an array of numbers.

console.log(`Prblm No. : 18`);
function findSecondLargest(arr) {
  arr = Array.from(new Set(arr));
  if (arr.length < 2) {
    return undefined;
  }
  arr.sort((a, b) => b - a);
  return arr[1];
}

console.log(findSecondLargest([5, 10, 15, 5, 20]));
console.log(findSecondLargest([25, 30, 35, 20, 15]));