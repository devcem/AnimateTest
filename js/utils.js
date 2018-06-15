var Utils = {
	lookAt : function(object, aim){
		return Math.atan2(object.x - aim.x, object.y - aim.y);
	},
	toDeg : function(angle){
		return angle * (180 / Math.PI);
	},
	toRad : function(angle){
		return angle * (Math.PI / 180);
	},
	lerp : function(start, end, amt){
		return (1-amt)*start+amt*end
	},
	rotate : function( a0,a1,t){
        return a0 + this.shortAngleDist(a0,a1)*t;
    },
    shortAngleDist : function(a0,a1) {
        var max = Math.PI*2;
        var da = (a1 - a0) % max;
        return 2*da % max - da;
    }
}