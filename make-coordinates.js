bcrypt = require('bcrypt')
fs = require('fs');
let dados = []
fs.readFile('socorro.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data.split(' ').forEach(element => {
    dados.push({lng: Number(element.split(',')[0]), lat: Number(element.split(',')[1])})
  });

  fs.writeFile('res_socorro.txt',JSON.stringify(dados), 'utf-8', function (err) {
    if (err) console.log(err)
   })
});

bcrypy






