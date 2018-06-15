var game = {
	player : null,
	mouse : {
		x : 0,
		y : 0
	},
	init : function(){
		//Define
		this.define();

		//Listeners
		window.addEventListener('mousemove', this.mousemove, true);

		//Ticker
		setInterval(function(self){
			self.update();
		}, 1, this);
	},
	define : function(){
		this.player = stage.children[0].character;
	},
	update : function(){
		var rotation = - Math.PI / 2 - Utils.lookAt({ x : window.innerWidth/2, y : window.innerHeight/2 }, this.mouse);
		var currentRotation = Utils.toRad(this.player.rotation);

		this.player.rotation = Utils.toDeg(Utils.rotate(currentRotation, rotation, 0.1));
	},
	mousemove : function(event){
		game.mouse.x = event.clientX;
		game.mouse.y = event.clientY;
	}
};