let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`
let sumA = 0;
let sumB = 0;
let collection = [];
for(let i=0;i<numbers.length;i++){
  sumA += numbers[i];
}
for(let j=0;j<userIds.length;j++){
  sumB += userIds[j];
}
collection.push(sumA,sumB);


// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`
let evenSumA = 0;
let evenSumB = 0;
let evenCollection = [];
for(let a=0;a<numbers.length;a++){
  if(numbers[a]%2 == 0){
    evenSumA += numbers[a];
  }
}
for(let b=0;b<userIds.length;b++){
  if(userIds[b]%2 == 0){
    evenSumB += userIds[b];
  }
}
evenCollection.push(evenSumA,evenSumB);
// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`
let oddSumA = 0;
let oddSumB = 0;
let oddCollection = [];
for(let c=0;c<numbers.length;c++){
  if(numbers[c]%2 == 1){
    oddSumA += numbers[c];
  }
}
for(let d=0;d<userIds.length;d++){
  if(userIds[d]%2 == 1){
    oddSumB += userIds[d];
  }
}
oddCollection.push(oddSumA,oddSumB);
/*
  @param means parameter

 4. Write a function named times which accets two parameter and return an array. 

  @param times (number)
  @param character (string)
  @return array

  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/

function times(num=0,str='test') {
  let timeArr = [];
    for(let x=1;x<=num;x++){
      timeArr.push(str);
    }
    return timeArr;
};

// Uncomment the code below and test the output

console.log(times(5, 'c')); // ['c', 'c', 'c', 'c', 'c']
console.log(times(2, 'a')); // ['a', 'a']
console.log(times(0)); // []
console.log(times(5)); // ['test', 'test', 'test', 'test', 'test']

/*

 5. Write a function named revert which reverts the element of the input array. 

  @param arr (array)
  @return array

  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function revert(arr) {
  let newArr = [];
  for(let k=arr.length-1;k>=0;k--){
    newArr.push(arr[k]); 
  }
  return newArr;
};

// Uncomment the code below and test the output
// console.log(revert([1, 2, 3, 4])); // [4, 3, 2, 1]
// console.log(revert(['a', 'd', 'c', 'b'])); // ['b', 'c', 'd', 'a']
// console.log(revert(['Ryan', 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  

  @param arr (array)
  @return array

  Example: 
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/
function isUnwanted(value){
  return value == false ||
  value == null ||
  value == undefined ||
  value == "" ||
  value == 0
}
function clear(arr) {
  let finalArr = [];
  for(let value of arr){
    if(!isUnwanted(value)){
      finalArr.push(value)
    }
  } return finalArr;
}

// Uncomment the code below and test the output
console.log(clear([1, 2, 3, 4, '', 0, null, undefined])); // [4, 3, 2, 1]
console.log(clear(['a', undefined, 'd', 0, 'c', 'b'])); // ['b', 'c', 'd', 'a']
console.log(clear(['Ryan', null, 0, 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/

function arrayToObj(arr) {
  let finalObj = {};
  for(let i=0;i<arr.length;i++){
    finalObj[i] = arr[i]
  }
  return finalObj;
} 

// Uncomment the code below and test the output
 console.log(arrayToObj([1, 2, 3, 4])); // {0: 1, 1: 2, 2: 3, 3: 4}
 console.log(arrayToObj(['a', undefined, 'd'])); // {0: 'a', 1: undefined, 2: 'd'}
 console.log(arrayToObj(['Ryan', 'John'])); // {0: 'Ryan', 1: 'John'}
