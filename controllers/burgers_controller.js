// Import the model (burger.js) to use its database functions.
var express = require("express");
var burgers = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/create/burgers", function(req, res) {
  burgers.create(req.body.burger_name, function(results){
    console.log(results);

    res.redirect("/");
  })
});

router.put("/burgers/:id", function(req, res) {


    burgers.update(req.params.id, function(result){
      console.log(result);

      res.sendStatus(200);
    })

  
});


// Export routes for server.js to use.
module.exports = router;
