let str = "+998 97 469 8898"
let ar = str.split(' ')
console.log(ar);

function alar() {
   let obj = {
      country: ar[0],
      region: ar[1],
      city: ar[2],
      number: ar[3]
   }
   console.log(obj)
}
alar()


let coordinate = {
   c1: [1, 2, 3],
   c2: [1, 2, 2],
   c3: [7, 4, 1],
   c4: [2, 2, 2]
}

let sum = 0
let sum2 = 0
let sum3 = 0

function calc() {

   for (i of coordinate.c1) {
      sum += Math.pow(i, 2)
   }


   for (i of coordinate.c2) {
      sum2 += Math.pow(i, 2)
   }

   for (i of coordinate.c3) {
      sum3 += Math.pow(i, 2)
   }

   let culc = Math.sqrt(sum)
   let culc2 = Math.sqrt(sum)
   let culc3 = Math.sqrt(sum)

   console.log(`c1 = ${culc}`);
   console.log(`c2 = ${culc2}`);
   console.log(`c3 = ${culc3}`);
   console.log(` c1 + c2 +  c3 = ${(culc + culc2 + culc3) / 3}`);
}

calc()
