var express = require('express');
var router = express.Router();
var randomvalue=Math.random()*100;
var x=0;
var y=0;
var z=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  x=Math.imul(randomvalue,2);
  y=Math.log(randomvalue);
  z=Math.log10(randomvalue);
  

  res.send(`imul function applied to ${randomvalue} is ${x}, <br> log function applied to ${randomvalue} is ${y}, <br> log10 function applied to ${randomvalue} is ${z}`);
});

module.exports = router;
