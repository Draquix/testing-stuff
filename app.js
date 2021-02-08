console.log('app.js is connected');

//for-each allows to iterate through an array
let myArray = ['a','b','c'];

myArray.forEach( function(value, index){
    console.log(index);
    console.log(value);
} )

let people = ['john', 'mary','susan','zach'];
for (let i = 0; i <= people.length; i++) {
    if (i===2) {
        break;
    }
    console.log('people at i', people[i]);
}


for (let i = 0; i <= people.length; i++) {
    if (i===2) {
        continue;
    }
    console.log('people at i', people[i]);
}

function findIt(array, pos=0){
    for (let i = 0; i <= array.length-1; i++) {
        if (i === pos) {
            return array[i];
        }
    }
    return null;
}
console.log('this is the for loop return', findIt(people,3));



people.forEach( function(item, index){
    console.log(item);
    console.log(index);
})

//arrow functions and interpolated strings
let f1 = () => 'hi';
console.log('f1',f1);

let f2 = (name) => `hi ${name}`;  //uses template literal

let e2 = function(name){
    return `hi ${name}`;
}

let a= 10;
let b = 10
let add = (a,b) => a+b;
console.log('add',add(a,b));

let abs = a => Math.abs(a);
let abs2 = a => {
    let results = Math.abs(a);
    return results;
}

//Code Challenge 1 example

const addOne = (arr) => {
    const newArray = [];
    arr.forEach( value => (
        newArray.push(value+1)
    ));
    return newArray                                                 
};
