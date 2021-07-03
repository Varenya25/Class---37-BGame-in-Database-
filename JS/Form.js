class Form{
    constructor(){
        var title = createElement ("h2");
        title.html ("Car Racing Game");
        title.position (130,0);

        this.input = createInput("NAME");
        this.input.position(130,160);
    
        this.button = createButton("LOG IN")
        this.button.position(185,200);
       
        this.greeting = createElement ("h3");
    }

    display ()  {
       this.button.mousePressed (()=> {
        this.input.hide ();
        this.button.hide ();

        player.name = this.input.value ();

        playerCount+=1;
        player.index = playerCount;
        player.updatePlayerNameAndDistance();
        player.updatePlayerCount (playerCount);

       this.greeting.html ("Hello! " + player.name);
        this.greeting.position (130,160);
      });
    }
    hide (){
        this.greeting.hide();
        this.input.hide ();
        this.button.hide ();
    }
}