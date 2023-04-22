
let obj = {
   name: "islom" ,
   nicmame :'islombek' ,
   nicame :'prvet' ,
   nicmme :'salom' ,
   salom: 44,
   age : 25,
   oylik :  25
}

let raqam = 0;

for(i in obj){
   if (typeof(obj[i]) == "number") {
      let son = obj[i]
      raqam = raqam + son
   } 

}

console.log(raqam);