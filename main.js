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
let x = NaN;

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
