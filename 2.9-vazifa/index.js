// 1 vazifa

let ixRaqam = 133
let binsry = ixRaqam.toString(2)

salom = () => {
   let bir = 0
   let noll = 0
   console.log(`${ixRaqam} === ${binsry}`);
   for (let i = 0; i < binsry.length; i++){
      if (binsry[i] == 1) bir +=1
   }
   console.log(`${bir} ta bir`);

   for (let i = 0; i < binsry.length; i++) {
      if (binsry[i] == 0) noll += 1
   }
   console.log(`${noll} ta nol qatnashga`);

}

salom()


let son1 = parseInt(Math.random() * 100)
let son2 = parseInt(Math.random() * 100)
let son3 = parseInt(Math.random() * 100)
let son4 = parseInt(Math.random() * 100)
let son5 = parseInt(Math.random() * 100)
let son6 = parseInt(Math.random() * 100)
urtacha = () => {
   var bal = Math.max(son1, son2, son3, son4, son5, son6,)
   console.log(`max ${+bal}`);

   var past = Math.min(son1, son2, son3, son4, son5, son6,)
   console.log(`min ${past}`);

   natija = bal - past
   console.log(`max,- min ==> ${bal}-${past} = ${natija}`);
}

urtacha()



