class Form{
    constructor(){

    } 
    display(){
        var title = createElement('h1');
        title.position(100,0);
        title.html('Car Racing Game');
        var input = createInput("Enter Name")
        input.position(100,100);
        var button = createButton("Start");
        button.position(100,150);
        var greeting = createElement('h1');
        button.mousePressed(function(){
            var name = input.value();
            input.hide()
            button.hide()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.position(100,100)
            greeting.html("Welcome "+ name)
        })
    }
}