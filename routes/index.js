let express = require('express');
let router = express.Router();

router.get('/',function(req,res,next){
  res.render("You made it!");
  ///add some stuff
});

module.exports = router;
