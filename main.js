// module5_homework-1

const arr = +prompt("Введите число", 0);


if (typeof arr == "number" && arr % 2 == 0 && !isNaN(arr)){
  console.log('Число четное')
}else if (typeof arr % 2 !== 0 && typeof arr == "number" && !isNaN(arr)){
  console.log('Число нечетное')
}else {
  console.log('Вы ввели текст')
}

// module5_homework-2
let x = 15;

if(typeof x == "number" && !isNaN){
  console.log('x - число');
} else if(typeof x == "string"){
  console.log('x - строка');
}else if(typeof x == 'boolean'){
  console.log('x - boolean')
}else{
  console.log('Не удолость распознать тип данных')
}

// module5_homework-3
  let greeting = "Hello";
  
  function reverseString(str) {

  return str.split("").reverse().join("");

}
console.log(reverseString(greeting))

// module5_homework-4
function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

console.log(getRandomInt());
console.log(getRandomInt());

// module5_homework-5
let arr = [12, 'sdsf', true, "dfdg", 155]

console.log(arr.length);

for(let key in arr){
  console.log(arr[key])
}

// module5_homework-6

const myArray = [1, 1, 3, 0, 5, 4]
let t = true;
for (let i = 0; i < myArray.length - 1; i++) {
  if(myArray[i] == myArray[i+1]) {
     t = true;
  }else {
     t = false;
  }
}
console.log(t)




// module5_homework-7
let arr = [1, 2, 3, 4, 5, 2, "dsfd"];
function count(arr) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0 && typeof arr[i] == "number") {
       count1++;
     }else if(typeof arr[i] !== "number")
      res = "Not a Number"
    else{
       count2++;

     }
  }
   console.log(count1);
  console.log(count2);
  console.log(res)
}
count(arr);
// module5_homework-8
let myMap = new Map();
myMap.set ('food', "pizza");
myMap.set ('juice', "fanta");
myMap.set (2, "apple");
myMap.set (true, "strawberry");

console.log(myMap.keys())
console.log(myMap.values())

for (let name of myMap.keys()){
	console.log('y', name)
}
for (let name of myMap.values()){
	console.log('x', name)
}
