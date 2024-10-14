let nama: string = "Wiryamanto";
console.log( "Nama: ", nama);

let umur: number = 18
console.log( "umur: ", umur);

let mahasiswa : boolean = true;
console.log ("ini Mahasiswa: ", mahasiswa) ;

let matrix: number [][]
matrix = [
[1,2],
[3,4],
[5,6]
]
console.log(matrix);

// type inference
let result = 123;
let result1 = "123"
console.log(typeof result)
console.log(typeof result1)

//generic Array (array itu pasti interger)
let matrix2: Array<number>;
matrix2 = [
    123,
    123
]
console.log(matrix2);

//Generic Array dalam Array
let matrix1: Array<Array<number>>;
matrix1 = [
    [1,2],
    [3,4],
    [5,6]
];
console.log(matrix1);

// Object, name & age itu property, string & number itu value
let person: { name: string; age: number } = {
    name: "John",
    age: 38
};
console.log("person:",person);

// any . note Booleans itu true or false
let randomValue : any = 10;
console.log("Random nilai (number): ",randomValue);
randomValue = "Hello"
console.log("Random nilai (number): ", randomValue);
randomValue = true
console.log("Random nilai (number): ", randomValue);

// Enum * red green blue itu index dan hanya akan menampilkan indeksnya saja dalam Enum
// jika ingin valuenya muncul perlu di isikan = lalu ""
enum Color{
    green,
    blue,
    red = "VALUE"
}
let favouriteColor: Color = Color.red;
console.log("enum",favouriteColor)

// Tuple (bisa interger bisa string)
let myTuple: [number,string] = [10, "Hello"]
console.log(myTuple[0]);
console.log(myTuple[1]);

// Union
let typeUnion: string | number | boolean
typeUnion = 101
console.log("identifier (Number): ", typeUnion);
console.log("identifier (String): ", typeUnion);
console.log("identifier (Boolean): ", typeUnion);