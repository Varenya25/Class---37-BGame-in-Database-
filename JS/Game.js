class Game{
    constructor(){

        
    }

    // function getGameState .. reads the gameState from DB
    getGameState () {
        //refer to gameState location in DB
        var gameStateRef = database.ref ("/gameState");
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
                        function(data){
                            gameState = data.val ();
                        }
        );
    }

    // function updateGameState .. updates gameState in the DB
    updateGameState (state) {
        var gameStateRef = database.ref ("/");
        gameStateRef.set ({"gameState" : state}) ;
    }

    // function start
    start () {
        if (gameState == 0) {
            player = new Player ();
            var startCount = player.getPlayerCount ();
            
            form = new Form () ;
            form.display () ;
        }
    }
    play (){
        form.hide()
        textSize(30);
        text("GAME START!", 120, 100);
        Player.getPlayerInfo (); // gets info of all players
        if (allPlayers != undefined) {
            var display_position = 130;
            for (var plr in allPlayers){
                
                if (plr == "player"+player.index)
                    fill("red");
                else
                    fill ("black");
                
                display_position+=20;
                textSize (15) ;
                text (allPlayers[plr].name+": " + allPlayers[plr].distance, 120, display_position);
            }
            if (keyIsDown (UP_ARROW) && player.index != null) {
                player.distance+=10;
                player.updatePlayerNameAndDistance ();
    
            }
            
        }
    }
}