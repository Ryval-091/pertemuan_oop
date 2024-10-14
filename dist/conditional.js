"use strict";
let num = 5;
if (num > 6) {
    console.log("kondisi pertama");
}
else if (num > 3) {
    console.log("kondisi kedua");
}
else {
    console.log("kondisi ketiga");
}
//switch case
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jum'at";
        break;
    case 6:
        dayName = "Sabtu";
        break;
    case 7:
        dayName = "Minggu";
        break;
    default:
        dayName = "Hari ini tidak valid";
        break;
}
console.log(`Hari ke ${day}: ${dayName}`);
