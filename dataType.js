const bigNumber = 2564426654233

// console.log(bigNumber);
// console.log(typeof bigNumber);

const mySymb = Symbol("key1");

const myObj = {
    [mySymb]: "meykey1",
};
console.log(myObj[mySymb]);