var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Olá Mundo!')
});

app.listen(4000, function (){
  console.log("App de exemplo escutando na porta 4000!")
});

exports.area = function (width) {
  return width * width
};

exports.perimeter = function (width) {
  return width * 6
};

console.log("Primeiro")
console.log("Segundo")

setTimeout(function(){
  console.log("Primeiro");
  }, 4000);
console.log("Segundo")

var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
res.send("Wiki pagina inicial");
});

router.get('/sobre', function (req, res) {
  res.send("Sobre a Wiki")
});
module.exports = router;
