var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();


var friends = require(path.join(__dirname,"../data/friends")).friends;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/", function(req, res) {
    var newFriend = req.body;

    console.log(req.body);

    for(var j = 0; j<newFriend.scores.length; j++){
        newFriend.scores[j] = parseInt(newFriend.scores[j]);
    }

    var newScores = newFriend.scores;
    
    var minScore = -1;
    var minFriend;

    for(var i = 0; i<friends.length; i++){
        
        compScore =  friends[i].scores;
        var score = 0;
        for(var j = 0; j<newScores.length; j++){
            score += Math.abs(newScores[j]-compScore[j]);
        }
        
        if(score < minScore || minScore === -1){
            minScore = score;
            minFriend = friends[i];
        }
        
    }



    friends.push(newFriend);
  
    res.json(minFriend);
  
});


router.get("/", function(req, res) {
    return res.json(friends);
});

module.exports = router;
