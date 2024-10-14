//function declaration 

function add(x: number, y: number, z: number){
    return x + y + z
}

console.log(add(2,4,4))

//function expression 
const add1 = function (x: number, y: number){
    return x + y;
}
console.log(add1(12,12));

//arrow function 

const add2 = (x: number, y: number) => x + y;

console.log(add2(12,12))

const add3 = (a: number, b: number): number => {
    return a + b;
}
console.log(add3(12,12));

const add4 = (a: number, b: number): void => {
    console.log(`hasil dari a dan b : ${a+b} `);
}
add4(12,12)