var PreloadState = {
	//load the game assets before the game starts
  preload: function() {

    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('backyard', 'virtual/assets/images/backyard.png');    
    this.load.image('apple', 'virtual/assets/images/apple.png');    
    this.load.image('candy', 'virtual/assets/images/candy.png');    
    this.load.image('rotate', 'virtual/assets/images/rotate.png');    
    this.load.image('toy', 'virtual/assets/images/rubber_duck.png');    
    this.load.image('arrow', 'virtual/assets/images/arrow.png');   
    this.load.spritesheet('pet', 'virtual/assets/images/pet.png', 97, 83, 5, 1, 1); 
  },
  create: function() {
    this.state.start('HomeState');
  }
};