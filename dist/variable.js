"use strict";
let nama = "Wiryamanto";
console.log("Nama: ", nama);
let umur = 18;
console.log("umur: ", umur);
let mahasiswa = true;
console.log("ini Mahasiswa: ", mahasiswa);
let matrix;
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix);
// type inference
let result = 123;
let result1 = "123";
console.log(typeof result);
console.log(typeof result1);
//generic Array (array itu pasti interger)
let matrix2;
matrix2 = [
    123,
    123
];
console.log(matrix2);
//Generic Array dalam Array
let matrix1;
matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix1);
// Object, name & age itu property, string & number itu value
let person = {
    name: "John",
    age: 38
};
console.log("person:", person);
// any . note Booleans itu true or false
let randomValue = 10;
console.log("Random nilai (number): ", randomValue);
randomValue = "Hello";
console.log("Random nilai (number): ", randomValue);
randomValue = true;
console.log("Random nilai (number): ", randomValue);
// Enum * red green blue itu index dan hanya akan menampilkan indeksnya saja dalam Enum
// jika ingin valuenya muncul perlu di isikan = lalu ""
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["blue"] = 1] = "blue";
    Color["red"] = "VALUE";
})(Color || (Color = {}));
let favouriteColor = Color.red;
console.log("enum", favouriteColor);
// Tuple (bisa interger bisa string)
let myTuple = [10, "Hello"];
console.log(myTuple[0]);
console.log(myTuple[1]);
// Union
let typeUnion;
typeUnion = 101;
console.log("identifier (Number): ", typeUnion);
console.log("identifier (String): ", typeUnion);
console.log("identifier (Boolean): ", typeUnion);
