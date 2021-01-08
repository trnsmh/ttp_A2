 //Semih Turan

let arr = [5,1,2,3,8,3,4,5,7,3,6,7,8,5,9];

 //////////////////////////////////////////
 //forEach()

const myEach = (arr, myCallback) => { 
  for(let i = 0; i < arr.length; i++){
    myCallback(arr[i]);
  }
};

const myDisplay = value => {
  console.log(value);
};
myEach (arr, myDisplay);


 ///////////////////////////////////////
 //myMap()

const myMap = (arr,myCallback) => {
  let newMap = [];
  for(let i=0; i < arr.length; i++){
    newMap.push(myCallback(arr[i]));
  }
  return newMap;
};

const square = (num) => { 
  return num*num;
};


console.log(myMap(arr,square));

 ///////////////////////////////////////
//myFilter()

const myFilter = (arr,myCallback) => {
  let newArr = [];
  for(let i=0; i < arr.length; i++){
    if(myCallback(arr[i])){
    newArr.push(arr[i]);
    }
  }
  return newArr;
};
const isOdd = num => {
  if(Math.abs(num % 2) === 1 ){
    return true;
  }
  else 
  return false;
}
console.log(myFilter(arr,isOdd));

/////////////////////////////////////
//mySome()

const mySome = (arr , myCallback) => {
  let value = 7;
  for(let i = 0; i < arr.length; i++ ){
    if(myCallback(arr[i],value)){
      return true;
    }
  }
  return false
} 

const isGreater = (num,treshold) => {
  if (num > treshold ){
    return true;
  }
  else false;
}
console.log(mySome(arr,isGreater));

 //////////////////////////////////////
//myEvery()
const myEvery = (arr , myCallback) => {
  let value = 11;
  for(let i = 0; i < arr.length; i++ ){
    if(myCallback(arr[i],value)===false){
      return false
    }
  }
  return true
} 

const isSmaller = (num,treshold) => {
  if (num  < treshold ){
    return true;
  }
  else return false;
}
console.log(myEvery(arr,isSmaller));

 ///////////////////////////////////////
//myReduce()
const myReduce = (arr , myCallback) => {
  let sum = 0;
    for(let i = 0; i < arr.length; i++ ){
      sum += myCallback(arr[i]);
    }
  return sum;
}
 const accumulate = num => {
    let sum = 0;
    return sum += num;
 }
 console.log(myReduce(arr,accumulate));

 ///////////////////////////////////////
//myIncludes()
const myIncludes = (arr, myNum) => {
  
  for (let i=0;i<arr.length;i++){
    if(myNum === arr[i]){
      return true;
    }
  }
  return false 
}
console.log(myIncludes(arr,9));

 ///////////////////////////////////////
//myIndexOf()
const myIndexOf = (arr, myNum) => {
  
  for (let i=0;i<arr.length;i++){
    if(myNum === arr[i]){
      return i;
    }
  }
  return -1; 
}
console.log(myIndexOf(arr,20));

 ///////////////////////////////////////
//myPush()
const myPush = (arr, myNum) => {

  let x = arr.length 
  arr.splice(x,0,myNum); 
  return arr.length;
}
console.log(myPush(arr,100));

 ///////////////////////////////////////
//myUnshift()
const myUnshift = (arr, myNum) => {

  let i=arr.length 
  while(i!==0){
    if(myNum === arr[i]){
      return i;
    }
    i--;
  }
  return -1; 
}
console.log(myUnshift(arr,7));

 ///////////////////////////////////////
 //grabKeys()
 const myObject = {z:4,x:5,c:6,v:7,b:8}
 const grabKeys = arr => { 
    for (const keys in myObject){
      console.log(keys)
    }
  }
grabKeys(myObject);

 ///////////////////////////////////////
 //grabValues()
 const grabValues = arr => { 
    for (const keys in myObject){
      console.log(myObject[keys])
    }
  }
grabValues(myObject);