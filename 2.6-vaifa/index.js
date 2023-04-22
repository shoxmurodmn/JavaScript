
let obj = {
   name: "islom" ,
   nicmame :'islombek' ,
   nicame :'prvet' ,
   nicmme :'salom' ,
   salom: 44,
   age : 25,
   oylik :  2500000
}

for(i in obj){
   if (typeof(obj[i]) == "number") {
     console.log(`${i} = ${obj[i] * 2}`); 
   } 
}