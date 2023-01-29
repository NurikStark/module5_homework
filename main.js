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