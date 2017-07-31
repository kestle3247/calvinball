/*
            Calvinball (http://www.picpak.net/calvin/oldsite/images/oogy.gif) is a game with a very complicated scoring system. Your job is to write a piece of code which determines a player's final score, given their starting scrore, and various other details about the player which are relevant to the game. 

            Provided below are three different player's starting scores. Uncomment one at a time to calculate the final score for that player.

            Calvinball Rules:
                1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
                2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
                3. A player's score is reduced by 77 if their last play was "Q"
                4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
                5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
                6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
                7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        */


        //Player One
        // var score = 193;
        // var last_play = "Q";
        // var broom = "broom";
        // var has_ball = false;
        // var is_in_tree = false;
        // var crying = true;

        
        //Player Two
        // var score = 394;
        // var last_play = "W";
        // var broom = "none";
        // var has_ball = true;
        // var is_in_tree = true;
        // var crying = false;
        

        
        // //Player Three
        var score = "f";
        var last_play = 1.5;
        var broom = "brush";
        var has_ball = true;
        var is_in_tree = false;
        var crying = true;
        

        //Code
        if (isNaN(score)) { //<--Rule 1
            score=500
        }
        else {
            score=0
        }
        if (crying == true) { // <--Rule 2
            score-=300
        }
        else {
            score+=0
        }
        if (isNaN(last_play) && is_in_tree == true) { //<--Rule 3/4         // <-----I know this is messing up my code but I have no idea how to fix it considering all the code that is already in here
            score-=77
            score+=395
        }
        else {
            score+=0
        }
        if (broom == "handle") { //<--Rule 5
            score *= 2
        }
        else if (broom == "brush") {
            score *= 3
        }
        else {
            score /= 2
        }
        if (is_in_tree == true && crying == true) { //<--Rule 6     //Disregard this rule if the player is crying.
            score+=0
        }
        else if (has_ball == true && is_in_tree == true) {
            score+=0
        }
        else if (has_ball == true && is_in_tree == false) {
            score *=1.5
        }
        if (isNaN(last_play)) {
            score+=0
        }
        else {
            score*= last_play
        }

        console.log(score);
        console.log(last_play)
        
        

