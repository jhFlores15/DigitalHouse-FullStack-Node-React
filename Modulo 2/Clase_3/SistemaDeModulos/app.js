const fs = require('fs');
const moment = require('moment');
const superheroes = require('./superheroes')
console.log(moment().format('Y-MM-DD'));
console.log(superheroes[0].saludar());

fs.readFile('message.txt','utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });
  