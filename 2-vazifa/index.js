let num = 4555;
let sum = 0;
let str = num.toString(); // sonni matnga aylantiramiz

for (let i = 0; i < str.length; i++) {
  let digit = +str[i]; // belgi alohida songa o'tkaziladi
   sum += digit;
}


