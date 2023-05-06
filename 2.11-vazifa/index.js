
let ar1 = [1, 2, 2,];

let ar2 = [2, 1, 3];
let all = true

for (let i = 0; i < ar1.length; i++) {
   if (ar1[i] !== ar2[i]) all = false
}

console.log(all);

// 2 masala

let tex = 'salom-dunyo'
let res = ''
for (key in tex) {
   if (tex[key - 1] === '-') {
      res += tex[key].toUpperCase()
   } else { res += tex[key] }
}
let na = res.split('-').join('')
console.log(na);