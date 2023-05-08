let users = [
   { id: 1, year: 1998, engine: 1, name: 'Tico' },
   { id: 2, year: 2005, engine: 1.2, name: 'Matiz' },
   { id: 3, year: 2010, engine: 1.5, name: 'Gentra' },
   { id: 4, year: 2010, engine: 1.5, name: 'Cobalt' },
   { id: 5, year: 2012, engine: 2.2, name: 'Malibu' },
   { id: 6, year: 2000, engine: 1.3, name: 'Damas' },
   { id: 7, year: 2018, engine: 2.4, name: 'Tracker' }
]

// 1 shart 
let choose = users.filter((value) => value.year <= 2000)
let choose1 = users.filter((value) => value.year < 2010)
let choose2 = users.filter((value) => value.year >= 2010)
let choose3 = users.sort((a, b) => a.engine - b.engine)
let choose4 = users.sort((a, b) => a.year - b.year)
let choose5 = users.sort((a, b) => a.name.localeCompare(b.name))

let status1 = () => {
   users.forEach((value, index) => {
      if (value.year <= 2001) value.status = 'eski'
   })
   console.log(users);
}

let status2 = () => {
   users.forEach((value, index) => {
      if (value.year >= 2010) value.status = 'yangi'
   })
   console.log(users);
}

let status3 = () => {
   users.map((value, index) => {
      if (value.year < 2010 && value.year > 2000) value.status = 'o\'rta'
   })
   console.log(users);
}

// console.log(choose);
// console.log(choose1);
// console.log(choose2);
// console.log(choose3);
// console.log(choose4);
// console.log(choose5);
// status1();
// status2();
// status3();

