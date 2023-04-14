// // let son = 4569
// // let son2 = 4569
// // let son3 = 4569
// // for(let i = 0 ; i<4 ; i++ ){
// //    let nam = son%10
// //    console.log(nam)
// //    son = parseInt(son/10)

// // }
// for(let i = 0 ; i<4 ; i++ ){
//    let nam = son2 % 10
//    son2 = parseInt(son2/10)
//    if (nam == 1) console.log("bir");
//    else if (nam == 2) console.log("ikki");
//    else if (nam == 3) console.log("uch");
//    else if (nam == 4) console.log("to'rt");
//    else if (nam == 5) console.log("besh");
//    else if (nam == 6) console.log("olti");
//    else if (nam == 7) console.log("uetti");
//    else if (nam == 8) console.log("sakkiz");
//    else if (nam == 9) console.log("to'qiz");
//    else console.log("null")

// }

// tup son
let sum = 20;

for (let i = 2; i < sum - 1; ++i) {

	let tub = false;

	for (let j = 2; j < i; j++) {
		if (i % j == 0) {
			   tub = true;
		}
	}
   console.log(tub);
	if (tub == false) {
		console.log(i);
	}
}
