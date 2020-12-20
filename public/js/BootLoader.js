class BootLoader extends Phaser.Scene {
    constructor(){
        super("BootLoader");         
    }


    preload() {
        this.load.image('background','assets/background.png')
        this.load.image('skull', 'assets/skull.png');
  
        this.load.image("blue", "assets/blue.png");
        this.load.image("cyan", "assets/cyan.png");
        this.load.image("green", "assets/green.png");
        this.load.image("lime", "assets/lime.png");
        this.load.image("orange", "assets/orange.png");
        this.load.image("pink", "assets/pink.png");
        this.load.image("purple", "assets/purple.png");
        this.load.image("red", "assets/red.png");
        this.load.image("yellow", "assets/yellow.png");
        
        //Load some new textures
        //for (let i=1;i<=5;i++) this.load.image('player'+i, 'assets/player'+ i + '.png');
        
    }

    create(){
        //CLIENT: Say to the Server that I am here. I will have a socket.id
        this.socket = io();
        //go to scene
        this.scene.start("Menu", {socket:this.socket, fromgame:false});
    }

}

export default BootLoader;