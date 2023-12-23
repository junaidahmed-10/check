const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello dunia";

for (const greet of greetings) {
    // console.log(`each charcter is ${greet}`);
}

//MAP

const map = new Map()

map.set("IN", "India")
map.set("Fr", "France")
map.set("US", "America")
// map.set("US", "America")
map.set("UK", "England")
map.set("RS", "Russia")

// console.log(map);

for (const [key, value] of map) {
    console.log(key,":- ", value);
}

const myObject = {
    'game1': "NFS",
    "game2": "spiderman",
}

for (const [key, value] of object) {
    // console.log(key); error
}


const gamed = {
    
}