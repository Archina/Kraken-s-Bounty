/*
			sea.js
	Main boat gameplay scene
*/

sea = function(){

	this.preload = function(){
		//game.load.image('vessel','src/gfx/vessel.png');
		game.load.image('background', 'src/Scene.png')
		game.load.image('wave', 'src/Wave.png')

	};

	this.create = function(){
		bg = game.add.image(game.world.centerX, game.world.centerY, 'background')
		bg.anchor.set(0.5)

		tint2 = 0xAAAAAA
		tint3 = 0x787878

		wave3_L = game.add.image(game.world.centerX,game.world.centerY*2, 'wave')
		wave3_L.anchor.set(0,1.5)
		wave3_L.tint = tint3
		wave3_R = game.add.image(game.world.centerX,game.world.centerY*2, 'wave')
		wave3_R.anchor.set(1,1.5)
		wave3_R.tint = tint3

		wave2_L = game.add.image(game.world.centerX,game.world.centerY*2, 'wave')
		wave2_L.anchor.set(0,1.3)
		wave2_L.tint = tint2
		wave2_R = game.add.image(game.world.centerX,game.world.centerY*2, 'wave')
		wave2_R.anchor.set(1,1.3)
		wave2_R.tint = tint2

		wave1_L = game.add.image(game.world.centerX,game.world.centerY*2, 'wave')
		wave1_L.anchor.set(0,1)
		wave1_R = game.add.image(game.world.centerX,game.world.centerY*2, 'wave')
		wave1_R.anchor.set(1,1)

		waveOff3 = 0
		waveOff2 = 0
		waveOff1 = 0

		timer = 0

		value = 3

		//Create global inputs for cursors
		cursors = game.input.keyboard.createCursorKeys()
	};

	this.update = function(){

		waveOff1 += 0.003
		waveOff2 += 0.002
		waveOff3 += 0.001

		timer += 0.025

		wave1_L.anchor.set(-waveOff1,0.9+Math.sin(timer)*0.1)
		wave1_R.anchor.set(1-waveOff1,0.9+Math.sin(timer)*0.1)

		wave2_L.anchor.set(-waveOff2,1.2+Math.sin(timer+1.3)*0.075)
		wave2_R.anchor.set(1-waveOff2,1.2+Math.sin(timer+1.3)*0.075)

		wave3_L.anchor.set(0-waveOff3,1.4+Math.sin(timer+4)*0.05)
		wave3_R.anchor.set(1-waveOff3,1.4+Math.sin(timer+4)*0.05)

		if(waveOff1 > 0.5)
			waveOff1 -= 1
		if(waveOff2 > 0.5)
			waveOff2 -= 1
		if(waveOff3 > 0.5)
			waveOff3 -= 1

		value += (Math.random()*2-1)
		if(value < 1)
			value = 1
		else if(value > 4)
			value = 4

		var v4 = parseInt( (value*value*value*value)-1 )
		var color = v4
		color = (color << 8)+v4
		color = (color << 8)+v4
		
		bg.tint = color

	};

	this.render = function(){


	};

}

var game = new Phaser.Game(800,450, Phaser.CANVAS, 'game');
game.state.add("sea",sea);
game.state.start("sea");
