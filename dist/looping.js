"use strict";
for (let i = 5; i > 2; i--) {
    console.log(`for loop: ${i}`);
}
let p = 0;
for (p; p <= 5; p++) {
    if (p == 4) {
        break; //Untuk memberhentikan looping hingga titik tertentu sesuai pernyataan pada "if"
    }
    console.log(p);
}
//while loop
let hasil = 0;
while (hasil < 5) {
    console.log(`while loop: ${hasil}`);
    hasil++;
}
