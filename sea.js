/*
			sea.js
	Main boat gameplay scene
*/

sea = function(){

	this.preload = function(){
		game.load.image('vessel','src/gfx/vessel.png');


	};

	this.create = function(){

		//Create global inputs for cursors
		cursors = game.input.keyboard.createCursorKeys();
	};

	this.update = function(){


	};

	this.render = function(){


	};

}

var game = new Phaser.Game(window.innerWidth-18,window.innerHeight-17, Phaser.AUTO, 'game');
game.state.add("sea",sea);
game.state.start("sea");