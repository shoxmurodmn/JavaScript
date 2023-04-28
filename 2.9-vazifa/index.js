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


