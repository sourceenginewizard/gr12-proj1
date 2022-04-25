


// Set up the stage and layer
let stage = new Konva.Stage({
    container: 'konvaCanvas',
    width: window.innerWidth,
    height: window.innerHeight
});

let layer

// This is the main function that will cause the full game to render. It will call a number
// of more specific functions to render the various components of the game.
function renderChoices(){
    let hittext = new Konva.Text({
        x: stage.width() / 2,
        y: 300,
        text: 'hit',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green',
    })   
    layer.add(hittext);

    let staytext = new Konva.Text({
        x: stage.width() / 2,
        y: 325,
        text: 'stay',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'red',
    })
    layer.add(staytext);
    hittext.on('click',handleHit)
    staytext.on('click',handlestay)

}



function render() {
    stage.destroyChildren() // Remove all objects from the stage
    layer = new Konva.Layer() // Create a fresh layer
    stage.add(layer) // Add the new layer to the stage
    addGrid(Konva, layer) // Can be removed/commented when game is complete
    renderPlayerHand()
    renderComputerHand()
    if (model.state == "playerBust"){
        renderPlayerBust();
    }
    else if (model.state == "playerTurn") {
        renderChoices();
    }
}

function renderPlayerHand() {
    for (let i = 0; i < model.playerHand.length; i++) {
        let cardImage = new Konva.Image({
            x: i*80,
            y: 0,
            image: getRawCardImage(model.playerHand[i]), 
            draggable: false,
        })
        layer.add(cardImage)
        

    

        // Add event listener
    }
}

function renderComputerHand() {
    for (let i = 0; i < model.compHand.length; i++) {
        let cardImage = new Konva.Image({
            x: i*80,
            y: 500,
            image: rawCardBackImage
        })
        if (i==0){
            cardImage.Image = getRawCardImage(model.compHand[i])
        }
        layer.add(cardImage)
    }
}


function renderPlayerBust(){
    let busttext = new Konva.Text({
        x: stage.width() / 2,
        y: 390,
        text: 'you bust!!!!',
        fontSize: 35,
        fontFamily: 'Calibri',
        fill: 'red',
    })

    layer.add(busttext);
}




