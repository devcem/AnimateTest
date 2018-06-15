(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_", frames: [[356,507,96,64],[0,0,500,407],[356,573,96,64],[356,639,64,64],[422,639,64,64],[356,409,96,96],[258,603,96,64],[0,409,256,256],[258,409,96,192]]}
];


// symbols:



(lib.arm = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bedroom = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.foot = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.forearm = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand_fist = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.leg = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.torso = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.torso_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.torso();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.torso_1, new cjs.Rectangle(0,0,96,192), null);


(lib.head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.head_1, new cjs.Rectangle(0,0,96,96), null);


(lib.hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand_fist();
	this.instance.parent = this;
	this.instance.setTransform(0,64,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(0,0,64,64), null);


(lib.hand_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand_fist();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_0, new cjs.Rectangle(0,0,64,64), null);


(lib.forearm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.forearm();
	this.instance.parent = this;
	this.instance.setTransform(0,64,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.forearm_1, new cjs.Rectangle(0,0,64,64), null);


(lib.forearm_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.forearm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.forearm_0, new cjs.Rectangle(0,0,64,64), null);


(lib.arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.arm();
	this.instance.parent = this;
	this.instance.setTransform(0,64,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arm_1, new cjs.Rectangle(0,0,96,64), null);


(lib.arm_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arm_0, new cjs.Rectangle(0,0,96,64), null);


(lib.character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.ikNode_2 = new lib.head_1();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.parent = this;
	this.ikNode_2.setTransform(22.1,98.3,0.999,0.999,-3,0,0,20.7,51.2);

	this.ikNode_8 = new lib.hand_0();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.parent = this;
	this.ikNode_8.setTransform(116.3,150,0.998,0.998,-22.9,0,0,16.6,33.1);

	this.ikNode_7 = new lib.forearm_1();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.parent = this;
	this.ikNode_7.setTransform(62,178.2,0.998,0.998,-21.7,0,0,-0.7,33);

	this.ikNode_6 = new lib.hand_1();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.parent = this;
	this.ikNode_6.setTransform(158.6,86.1,0.999,0.999,86.5,0,0,21.8,33.1);

	this.ikNode_1 = new lib.forearm_0();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(111.9,47.2,0.998,0.998,32.2,0,0,1.4,31.1);

	this.ikNode_5 = new lib.arm_0();
	this.ikNode_5.name = "ikNode_5";
	this.ikNode_5.parent = this;
	this.ikNode_5.setTransform(46.9,52.2,0.998,0.998,17.7,0,0,8.7,55.1);

	this.ikNode_4 = new lib.arm_1();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.parent = this;
	this.ikNode_4.setTransform(24.7,133.7,0.998,0.998,23.2,0,0,13.1,7.3);

	this.ikNode_3 = new lib.torso_1();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.parent = this;
	this.ikNode_3.setTransform(48.3,94.6,0.998,0.998,17.9,0,0,49.2,95.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:17.9,y:94.6,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.1,rotation:23.2,x:24.7,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.9,y:52.2,rotation:17.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:32.2,x:111.9,y:47.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:86.5,x:158.6,y:86.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-21.7,x:62,y:178.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-22.9,x:116.3,y:150,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3,x:22.1,regY:51.2,y:98.3}}]}).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.8,y:94.4,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:23,x:24.9,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.8,y:52.1,rotation:17.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.4,x:111.8,y:46.9}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:86.6,x:158.5,y:86.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-22,x:62.3,y:178.1,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-23.7,x:116.4,y:149.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.6,rotation:-3.1,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.7,y:94.4,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.7,x:25,y:133.8,regY:7.3}},{t:this.ikNode_5,p:{x:46.9,y:52,rotation:17.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.7,x:111.8,y:46.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:86.8,x:158.2,y:86.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-22.3,x:62.5,y:177.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-24.4,x:116.5,y:149.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.1,x:22.1,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.6,y:94.3,regX:49.1,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.5,x:24.9,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.8,y:52,rotation:17.5,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.9,x:111.7,y:46.7}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:86.9,x:157.9,y:86.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-22.6,x:62.7,y:177.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-25.2,x:116.6,y:148.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.2,x:22.1,regY:51.3,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.5,y:94.3,regX:49.1,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.3,x:25,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.7,y:52,rotation:17.4,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:33.1,x:111.5,y:46.5}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87,x:157.7,y:86.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-23,x:62.9,y:177.4,regY:32.9,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-26,x:116.7,y:148.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.3,x:22,regY:51.1,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:17.5,y:94.4,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.1,rotation:22,x:25,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:46.6,y:51.9,rotation:17.3,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:33.4,x:111.4,y:46.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.2,x:157.5,y:86.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-23.3,x:63.2,y:177.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-26.8,x:116.8,y:147.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.4,x:22.1,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.4,y:94.2,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.8,x:25.2,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.6,y:51.9,rotation:17.2,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:33.6,x:111.3,y:46.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.3,x:157.2,y:86.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-23.6,x:63.3,y:177.3,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-27.6,x:116.8,y:147.3,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.5,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:17.3,y:94.3,regX:49.3,x:48.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.5,x:25.2,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.5,y:51.8,rotation:17.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:33.9,x:111.2,y:46.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.4,x:157,y:86.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-23.9,x:63.6,y:177.1,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-28.4,x:116.9,y:146.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.6,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.2,y:94.1,regX:49.1,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.3,x:25.3,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.4,y:51.7,rotation:17.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:34.1,x:111.2,y:45.9}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.5,x:156.7,y:86.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-24.2,x:63.9,y:177,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-29.2,x:116.9,y:146.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.7,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.1,y:94.1,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:21,x:25.3,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.3,y:51.8,rotation:17,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:34.4,x:111.1,y:45.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.7,x:156.5,y:86.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-24.5,x:64.1,y:176.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-29.9,x:117.1,y:145.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.8,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17,y:94,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.1,rotation:20.8,x:25.3,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:46.2,y:51.6,rotation:16.9,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:34.6,x:111.1,y:45.7}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.8,x:156.2,y:86.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-24.9,x:64.4,y:176.7,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.1,rotation:-30.7,x:117,y:145.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.8,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.9,y:94,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:20.6,x:25.5,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:46.1,y:51.6,rotation:16.8,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:34.8,x:111,y:45.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.9,x:155.9,y:86.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-25.2,x:64.6,y:176.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-31.5,x:117.1,y:145,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.9,x:22,regY:51.3,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.8,y:93.9,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:20.3,x:25.5,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.1,y:51.6,rotation:16.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35.1,x:110.9,y:45.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.1,x:155.7,y:86.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-25.5,x:64.8,y:176.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-32.3,x:117.2,y:144.5,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.8,y:93.9,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:20.1,x:25.5,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:46,y:51.6,rotation:16.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35.3,x:110.8,y:45.3}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.2,x:155.4,y:86.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-25.8,x:65,y:176.1,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.3,rotation:-33.1,x:117.4,y:144.1,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.1,x:22,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.7,y:93.9,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.8,x:25.6,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.9,y:51.4,rotation:16.5,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:30.9,rotation:35.6,x:110.8,y:45.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.3,x:155.2,y:86.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-26.1,x:65.2,y:175.8,regY:32.9,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-33.9,x:117.3,y:143.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.2,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.6,y:93.9,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.6,x:25.6,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.9,y:51.6,rotation:16.5,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35.8,x:110.7,y:45}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.5,x:154.9,y:87,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-26.4,x:65.5,y:175.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-34.7,x:117.3,y:143.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.3,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.5,y:93.8,regX:49.3,x:48.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.4,x:25.7,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.8,y:51.5,rotation:16.4,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:30.9,rotation:36.1,x:110.6,y:44.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.6,x:154.7,y:87.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-26.8,x:65.8,y:175.5,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-35.4,x:117.3,y:142.7,regX:16.5}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.4,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.4,y:93.8,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.1,x:25.7,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.8,y:51.4,rotation:16.3,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:36.3,x:110.5,y:44.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.7,x:154.4,y:87.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-27.1,x:66,y:175.2,regY:32.9,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-36.2,x:117.3,y:142.2,regX:16.5}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.5,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:16.3,y:93.9,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.9,x:25.8,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.7,y:51.3,rotation:16.2,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:36.5,x:110.4,y:44.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.9,x:154.2,y:87.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-27.4,x:66.3,y:175.1,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-37,x:117.5,y:141.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.5,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.2,y:93.7,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.6,x:25.8,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.5,y:51.4,rotation:16.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:36.8,x:110.2,y:44.5}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89,x:153.9,y:87.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-27.7,x:66.5,y:175,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-37.8,x:117.7,y:141.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.6,x:21.9,regY:51.3,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.1,y:93.7,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.4,x:25.9,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.5,y:51.3,rotation:16,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:37,x:110.2,y:44.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.1,x:153.7,y:87.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-28,x:66.7,y:174.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-38.6,x:117.6,y:140.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.7,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16,y:93.7,regX:49.3,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.2,x:25.9,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.4,y:51.3,rotation:15.9,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:37.3,x:110.1,y:44.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.3,x:153.4,y:87.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-28.3,x:66.9,y:174.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-39.4,x:117.6,y:140.4,regX:16.5}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.8,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16,y:93.6,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.9,x:26,y:133.6,regY:7.4}},{t:this.ikNode_5,p:{x:45.3,y:51.2,rotation:15.9,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:37.5,x:110.1,y:44.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.4,x:153.1,y:87.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-28.7,x:67.2,y:174.5,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-40.1,x:117.6,y:139.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.9,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.9,y:93.6,regX:49.3,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.7,x:26.1,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.2,y:51.1,rotation:15.8,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:37.8,x:110,y:43.9}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.5,x:152.9,y:87.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-29,x:67.3,y:174.3,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-40.9,x:117.8,y:139.5,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-5,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.8,y:93.5,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.1,rotation:17.4,x:25.9,y:133.6,regY:7.4}},{t:this.ikNode_5,p:{x:45.2,y:51.2,rotation:15.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:38,x:109.9,y:43.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.7,x:152.6,y:87.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-29.3,x:67.6,y:174.1,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-41.7,x:117.8,y:139,regX:16.6}},{t:this.ikNode_2,p:{regX:20.6,rotation:-5.1,x:21.8,regY:51.2,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.7,y:93.4,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.2,x:26.1,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.1,y:51.1,rotation:15.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:38.2,x:109.8,y:43.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.8,x:152.3,y:87.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-29.6,x:67.7,y:174,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-42.5,x:117.8,y:138.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-5.2,x:21.9,regY:51.2,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.6,y:93.4,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17,x:26.2,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45,y:51.1,rotation:15.5,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:30.9,rotation:38.5,x:109.8,y:43.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.9,x:152.1,y:87.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-29.9,x:68,y:173.8,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-43.3,x:117.7,y:138.1,regX:16.5}},{t:this.ikNode_2,p:{regX:20.7,rotation:-5.2,x:21.9,regY:51.2,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.7,y:93.5,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.1,x:26.2,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.1,y:51.1,rotation:15.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:38.3,x:109.8,y:43.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.8,x:152.2,y:87.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-29.7,x:67.9,y:173.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-42.7,x:117.8,y:138.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-5.2,x:21.9,regY:51.2,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.7,y:93.5,regX:49.1,x:48.1}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.3,x:26.1,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.1,y:51.1,rotation:15.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:38.1,x:109.9,y:43.7}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.7,x:152.5,y:87.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-29.4,x:67.7,y:174,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-42,x:117.8,y:138.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-5.1,x:21.9,regY:51.2,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.8,y:93.5,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.5,x:26.1,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.2,y:51.2,rotation:15.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:37.9,x:109.9,y:43.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.6,x:152.7,y:87.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-29.2,x:67.5,y:174.1,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-41.4,x:117.8,y:139.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-5,x:21.9,regY:51.2,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:15.9,y:93.7,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.7,x:26.1,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.3,y:51.1,rotation:15.8,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:37.7,x:110,y:43.9}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.5,x:153,y:87.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-28.9,x:67.4,y:174.3,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-40.8,x:117.8,y:139.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-5,x:21.9,regY:51.1,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:15.9,y:93.6,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:17.9,x:26,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.3,y:51.3,rotation:15.9,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:37.5,x:110,y:44.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:89.4,x:153,y:87.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-28.7,x:67.1,y:174.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-40.2,x:117.8,y:139.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.9,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:16,y:93.7,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:18,x:26,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.4,y:51.3,rotation:15.9,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:37.3,x:110.1,y:44.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.3,x:153.3,y:87.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-28.4,x:67,y:174.6,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-39.6,x:117.7,y:140.3,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.8,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.1,y:93.7,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.1,rotation:18.2,x:25.7,y:133.5,regY:7.3}},{t:this.ikNode_5,p:{x:45.4,y:51.3,rotation:16,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:37.1,x:110.2,y:44.3}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.2,x:153.5,y:87.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-28.2,x:66.8,y:174.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-39,x:117.8,y:140.5,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.7,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:16.1,y:93.8,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.4,x:25.9,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.5,y:51.4,rotation:16.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:36.9,x:110.2,y:44.5}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89.1,x:153.7,y:87.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-27.9,x:66.7,y:174.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-38.3,x:117.7,y:140.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.6,rotation:-4.7,x:21.8,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.2,y:93.7,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.6,x:25.8,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.5,y:51.4,rotation:16.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:36.7,x:110.3,y:44.5}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:89,x:153.9,y:87.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-27.7,x:66.5,y:174.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-37.7,x:117.5,y:141.3,regX:16.5}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.6,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.3,y:93.7,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.8,x:25.8,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.6,y:51.3,rotation:16.2,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:36.5,x:110.3,y:44.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:88.9,x:154,y:87.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-27.5,x:66.3,y:175.1,regY:32.9,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-37.1,x:117.6,y:141.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.5,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.3,y:93.8,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:18.9,x:25.8,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:45.7,y:51.5,rotation:16.3,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:36.4,x:110.4,y:44.7}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.8,x:154.3,y:87.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-27.2,x:66.2,y:175.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-36.5,x:117.5,y:142.1,regX:16.5}},{t:this.ikNode_2,p:{regX:20.6,rotation:-4.5,x:21.8,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.4,y:93.8,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.1,x:25.7,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.7,y:51.4,rotation:16.3,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:36.2,x:110.5,y:44.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.7,x:154.5,y:87,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-27,x:66,y:175.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-35.9,x:117.5,y:142.3,regX:16.6}},{t:this.ikNode_2,p:{regX:20.6,rotation:-4.4,x:21.8,regY:51.1,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.5,y:93.8,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.3,x:25.7,y:133.7,regY:7.4}},{t:this.ikNode_5,p:{x:45.9,y:51.6,rotation:16.4,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:30.9,rotation:36,x:110.6,y:44.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.6,x:154.7,y:87,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-26.7,x:65.9,y:175.5,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-35.3,x:117.5,y:142.7,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.3,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.5,y:93.9,regX:49.1,x:48.2}},{t:this.ikNode_4,p:{regX:13.1,rotation:19.5,x:25.5,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.9,y:51.6,rotation:16.5,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35.8,x:110.6,y:45}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.5,x:154.9,y:87,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-26.5,x:65.6,y:175.8,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-34.6,x:117.5,y:143.1,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.2,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.6,y:93.9,regX:49.1,x:48.1}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.7,x:25.6,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:45.9,y:51.4,rotation:16.5,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:30.9,rotation:35.6,x:110.8,y:45.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:88.4,x:155,y:87,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-26.2,x:65.4,y:175.8,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-34,x:117.5,y:143.5,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.2,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.7,y:93.9,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:19.8,x:25.6,y:133.6,regY:7.3}},{t:this.ikNode_5,p:{x:45.9,y:51.7,rotation:16.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:30.9,rotation:35.4,x:110.8,y:45.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.3,x:155.3,y:86.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-26,x:65.3,y:175.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-33.4,x:117.4,y:143.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4.1,x:22,regY:51.3,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.7,y:94,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:20,x:25.5,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:45.9,y:51.7,rotation:16.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35.2,x:110.8,y:45.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.2,x:155.5,y:86.8,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-25.7,x:65.1,y:176,regY:32.9,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-32.8,x:117.4,y:144.1,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-4,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.8,y:94,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:20.2,x:25.5,y:133.8,regY:7.4}},{t:this.ikNode_5,p:{x:46,y:51.6,rotation:16.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35,x:110.9,y:45.5}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:88.1,x:155.7,y:86.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-25.5,x:64.9,y:176.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-32.2,x:117.3,y:144.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.9,x:22,regY:51.3,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:16.8,y:94.1,regX:49.2,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:20.4,x:25.4,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46,y:51.7,rotation:16.8,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:34.8,x:110.9,y:45.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:88,x:155.8,y:86.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-25.2,x:64.8,y:176.4,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-31.6,x:117.3,y:144.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.9,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:16.9,y:94.1,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:20.6,x:25.5,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.1,y:51.7,rotation:16.9,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:34.6,x:111,y:45.7}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:87.9,x:156,y:86.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-25,x:64.6,y:176.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-30.9,x:117.3,y:145.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.8,x:22,regY:51.3,y:98.5}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17,y:94.1,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.1,rotation:20.8,x:25.3,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.2,y:51.8,rotation:16.9,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:34.4,x:111.1,y:45.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.8,x:156.3,y:86.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-24.7,x:64.5,y:176.6,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-30.3,x:117.2,y:145.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.7,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17,y:94.1,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:20.9,x:25.3,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.4,y:51.8,rotation:17,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:34.2,x:111,y:46}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.7,x:156.5,y:86.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-24.5,x:64.3,y:176.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-29.7,x:117.2,y:145.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.7,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.1,y:94.1,regX:49.3,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.1,x:25.4,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.3,y:51.8,rotation:17.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:34,x:111.2,y:46}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.6,x:156.7,y:86.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-24.2,x:64,y:176.9,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-29.1,x:117.1,y:146.3,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.6,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.2,y:94.2,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.3,x:25.3,y:133.8,regY:7.3}},{t:this.ikNode_5,p:{x:46.4,y:51.9,rotation:17.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:33.8,x:111.3,y:46.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.4,x:156.9,y:86.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-24,x:63.9,y:177,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-28.5,x:117.1,y:146.7,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.5,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.2,y:94.3,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.5,x:25.2,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.4,y:51.9,rotation:17.2,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:33.6,x:111.3,y:46.3}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:87.3,x:157.2,y:86.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-23.7,x:63.8,y:177.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-27.9,x:117,y:147.1,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.4,x:22.1,regY:51.1,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.3,y:94.3,regX:49.3,x:48.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.7,x:25.2,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.6,y:52,rotation:17.3,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:33.4,x:111.4,y:46.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.2,x:157.3,y:86.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-23.5,x:63.5,y:177.3,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-27.2,x:117,y:147.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.4,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.4,y:94.3,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:21.8,x:25.2,y:133.8,regY:7.3}},{t:this.ikNode_5,p:{x:46.6,y:52,rotation:17.4,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:30.9,rotation:33.2,x:111.4,y:46.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87.1,x:157.5,y:86.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-23.3,x:63.4,y:177.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-26.6,x:116.9,y:147.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.3,x:22,regY:51.1,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.4,y:94.3,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.1,rotation:22,x:25,y:133.7,regY:7.3}},{t:this.ikNode_5,p:{x:46.6,y:52,rotation:17.4,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:33.1,x:111.4,y:46.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:87,x:157.8,y:86.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-23,x:63.2,y:177.3,regY:32.9,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-26,x:116.9,y:148.1,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.2,x:22.1,regY:51.3,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.5,y:94.3,regX:49.2,x:48.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.2,x:25.1,y:133.8,regY:7.3}},{t:this.ikNode_5,p:{x:46.8,y:52.1,rotation:17.5,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.9,x:111.5,y:46.7}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:86.9,x:157.9,y:86.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-22.8,x:63,y:177.5,regY:32.9,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-25.4,x:116.8,y:148.5,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.2,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.6,y:94.4,regX:49.1,x:48.2}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.4,x:25.1,y:133.8,regY:7.3}},{t:this.ikNode_5,p:{x:46.8,y:52.1,rotation:17.6,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.7,x:111.7,y:46.8}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:86.8,x:158,y:86.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-22.5,x:62.9,y:177.6,regY:32.9,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-24.8,x:116.8,y:148.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3.1,x:22.1,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.6,y:94.4,regX:49.2,x:48.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.6,x:24.9,y:133.9,regY:7.4}},{t:this.ikNode_5,p:{x:46.8,y:52.1,rotation:17.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.5,x:111.7,y:47}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:86.7,x:158.2,y:86.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-22.3,x:62.7,y:177.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-24.2,x:116.6,y:149.1,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-3,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:17.7,y:94.4,regX:49.2,x:48.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.7,x:25,y:133.9,regY:7.3}},{t:this.ikNode_5,p:{x:46.8,y:52.2,rotation:17.7,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.3,x:111.8,y:47.1}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:86.6,x:158.4,y:86.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-22,x:62.6,y:177.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-23.5,x:116.7,y:149.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.6,rotation:-2.9,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:17.8,y:94.6,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.9,x:25,y:133.9,regY:7.3}},{t:this.ikNode_5,p:{x:46.9,y:52.2,rotation:17.8,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.1,x:111.9,y:47.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:86.5,x:158.5,y:86.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-21.8,x:62.3,y:178.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-22.9,x:116.5,y:149.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-2.9,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:26.4,y:96.3,regX:49.2,x:48.5}},{t:this.ikNode_4,p:{regX:13.1,rotation:34.5,x:19.3,y:131.7,regY:7.4}},{t:this.ikNode_5,p:{x:53.4,y:54.1,rotation:26.1,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35.2,x:118.4,y:58.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:83.3,x:163,y:100,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:-13.2,x:47.2,y:182.6,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-14.3,x:105.1,y:162.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:0.9,x:22,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:35,y:98.1,regX:49.3,x:48.6}},{t:this.ikNode_4,p:{regX:13.2,rotation:46.1,x:14.5,y:128.7,regY:7.3}},{t:this.ikNode_5,p:{x:59.7,y:57.1,rotation:34.4,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:38.3,x:123.4,y:70.8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:80.1,x:165.7,y:114.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-4.6,x:31.5,y:183.9,regY:32.9,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-5.7,x:91.7,y:173.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:4.6,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:43.6,y:99.8,regX:49.1,x:48.5}},{t:this.ikNode_4,p:{regX:13.2,rotation:57.6,x:10.2,y:124.9,regY:7.3}},{t:this.ikNode_5,p:{x:65.7,y:61,rotation:42.7,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:30.9,rotation:41.4,x:126.7,y:83.7}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:76.9,x:166.5,y:129.8,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:4,x:15.8,y:182.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:2.9,x:76.9,y:181,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:8.3,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:52.2,y:101.5,regX:49.2,x:48.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:69.2,x:6.7,y:120.6,regY:7.3}},{t:this.ikNode_5,p:{x:71.1,y:65.7,rotation:51,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:44.5,x:128.2,y:97.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:73.8,x:165.5,y:145.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:12.7,x:0.6,y:178.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:11.5,x:61.3,y:185.7,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:12.1,x:21.9,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:60.8,y:103.1,regX:49.2,x:48.1}},{t:this.ikNode_4,p:{regX:13.2,rotation:80.8,x:4,y:115.8,regY:7.3}},{t:this.ikNode_5,p:{x:76.1,y:71.1,rotation:59.3,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:47.6,x:127.8,y:110.5}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:70.6,x:162.6,y:160.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:21.3,x:-13.5,y:171.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:20.1,x:45.3,y:187.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:15.8,x:22,regY:51.1,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:44,y:96.9,regX:49.2,x:48.5}},{t:this.ikNode_4,p:{regX:13.2,rotation:62.9,x:9.8,y:121.7,regY:7.4}},{t:this.ikNode_5,p:{x:66,y:58,rotation:42.9,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:47.2,x:126.9,y:81.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:70.9,x:161.8,y:131,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:14.3,x:10.2,y:179.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:6.7,x:70.6,y:188.7,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:1.9,x:21.8,regY:51.3,y:98.4}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:27.3,y:90.5,regX:49.2,x:47.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:45.1,x:17.6,y:125.4,regY:7.3}},{t:this.ikNode_5,p:{x:52.9,y:48.4,rotation:26.4,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:46.8,x:117.9,y:53.2}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:71.3,x:153.3,y:102.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_7,p:{rotation:7.4,x:35.7,y:180.5,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-6.8,x:96.7,y:182.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-11.9,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:10.5,y:84.7,regX:49.3,x:44.9}},{t:this.ikNode_4,p:{regX:13.1,rotation:27.2,x:26.2,y:126.6,regY:7.4}},{t:this.ikNode_5,p:{x:37.9,y:42.7,rotation:9.9,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:46.4,x:101.6,y:28.9}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:71.6,x:137.4,y:78.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:0.5,x:60.5,y:173.5,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-20.2,x:121.3,y:167.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-25.8,x:22,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-6.2,y:79.4,regX:49.2,x:40.9}},{t:this.ikNode_4,p:{regX:13.2,rotation:9.3,x:35.3,y:125.2,regY:7.4}},{t:this.ikNode_5,p:{x:22.3,y:41.3,rotation:-6.5,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:45.9,x:79.3,y:10.2}},{t:this.ikNode_6,p:{regX:21.9,regY:33,rotation:71.9,x:115.6,y:59.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-6.4,x:82.1,y:159.1,regY:33,regX:-0.8}},{t:this.ikNode_8,p:{regY:33.2,rotation:-33.7,x:141.9,y:146.2,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-39.7,x:22,regY:51.3,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-23,y:75.4,regX:49.2,x:35.9}},{t:this.ikNode_4,p:{regX:13.2,rotation:-8.5,x:43.7,y:120.7,regY:7.3}},{t:this.ikNode_5,p:{x:7,y:44.4,rotation:-23,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:45.5,x:52.9,y:-1.7}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:72.3,x:89.4,y:47.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-13.3,x:98.6,y:138.8,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-47.1,x:156.3,y:118.7,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-53.5,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:-25.5,y:75.5,regX:49.2,x:35.9}},{t:this.ikNode_4,p:{regX:13.2,rotation:-13.5,x:45.6,y:120.2,regY:7.3}},{t:this.ikNode_5,p:{x:5.7,y:45.6,rotation:-25.5,regX:8.8,regY:55.1}},{t:this.ikNode_1,p:{regY:31.1,rotation:43,x:49.4,y:-2.3}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:69.7,x:88.1,y:44.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-23.3,x:102,y:133.6,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-57.1,x:155.4,y:103.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-53.5,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-28.1,y:75.4,regX:49.1,x:35.8}},{t:this.ikNode_4,p:{regX:13.2,rotation:-18.5,x:47.6,y:119.8,regY:7.3}},{t:this.ikNode_5,p:{x:4.3,y:46.8,rotation:-28.1,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:40.4,x:45.9,y:-2.9}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:67.2,x:86.7,y:42.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-33.3,x:104.9,y:128.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-67.2,x:152.4,y:89.7,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-53.5,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-30.6,y:75.3,regX:49.2,x:35.9}},{t:this.ikNode_4,p:{regX:13.2,rotation:-23.4,x:49.6,y:119.3,regY:7.4}},{t:this.ikNode_5,p:{x:3.1,y:48.2,rotation:-30.6,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:37.9,x:42.5,y:-3.3}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:64.6,x:85.2,y:40.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-43.2,x:107.4,y:122.6,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-77.2,x:147.5,y:76.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-53.5,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-33.2,y:75.2,regX:49.3,x:36}},{t:this.ikNode_4,p:{regX:13.2,rotation:-28.4,x:51.4,y:118.5,regY:7.3}},{t:this.ikNode_5,p:{x:2,y:49.8,rotation:-33.2,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:35.3,x:38.9,y:-3.4}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:62.1,x:83.6,y:38,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-53.2,x:109.4,y:116.9,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-87.3,x:140.9,y:64.5,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-53.5,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-35.8,y:75.3,regX:49.2,x:35.9}},{t:this.ikNode_4,p:{regX:13.1,rotation:-33.3,x:53.2,y:117.8,regY:7.3}},{t:this.ikNode_5,p:{x:0.9,y:51.3,rotation:-35.8,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.8,x:35.4,y:-3.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:59.5,x:81.8,y:35.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-63.1,x:111,y:111,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-97.3,x:132.9,y:54.1,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-53.5,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-25,y:78.1,regX:49.2,x:39.7}},{t:this.ikNode_4,p:{regX:13.2,rotation:-22.1,x:49,y:123.1,regY:7.3}},{t:this.ikNode_5,p:{x:9.7,y:47.9,rotation:-25.1,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:32.6,x:53.9,y:0.5}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:64.9,x:100.4,y:39.8,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-54.9,x:106.8,y:127.7,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-82.4,x:136.8,y:74.6,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-43.4,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-14.3,y:81.5,regX:49.1,x:42.8}},{t:this.ikNode_4,p:{regX:13.2,rotation:-10.8,x:43.8,y:127.4,regY:7.3}},{t:this.ikNode_5,p:{x:19.1,y:46.5,rotation:-14.3,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.5,x:71.4,y:8}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:70.3,x:118,y:47.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-46.6,x:99.5,y:143.4,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-67.5,x:136.9,y:95,regX:16.6}},{t:this.ikNode_2,p:{regX:20.6,rotation:-33.3,x:22.1,regY:51.3,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:-3.6,y:85.6,regX:49.2,x:45.5}},{t:this.ikNode_4,p:{regX:13.2,rotation:0.4,x:37.8,y:130.8,regY:7.3}},{t:this.ikNode_5,p:{x:28.6,y:46.7,rotation:-3.6,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.4,x:87.2,y:18.5}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:75.7,x:133.7,y:57.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-38.3,x:89.4,y:157.3,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.2,rotation:-52.7,x:133.4,y:114.8,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-23.1,x:22.1,regY:51.2,y:98.3}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95,rotation:7.1,y:89.9,regX:49.3,x:47.4}},{t:this.ikNode_4,p:{regX:13.2,rotation:11.7,x:31.6,y:132.9,regY:7.3}},{t:this.ikNode_5,p:{x:38,y:48.4,rotation:7.1,regX:8.7,regY:55}},{t:this.ikNode_1,p:{regY:31,rotation:32.2,x:100.9,y:31.6}},{t:this.ikNode_6,p:{regX:21.8,regY:33,rotation:81.1,x:147.5,y:70.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-30,x:76.9,y:169,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.3,rotation:-37.8,x:126.6,y:133.4,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-13,x:22.1,regY:51.2,y:98.2}}]},1).to({state:[{t:this.ikNode_3,p:{regY:95.1,rotation:17.8,y:94.6,regX:49.2,x:48.3}},{t:this.ikNode_4,p:{regX:13.2,rotation:22.9,x:25,y:133.9,regY:7.3}},{t:this.ikNode_5,p:{x:46.9,y:52.2,rotation:17.8,regX:8.7,regY:55.1}},{t:this.ikNode_1,p:{regY:31,rotation:32.1,x:111.9,y:47.1}},{t:this.ikNode_6,p:{regX:21.8,regY:33.1,rotation:86.5,x:158.5,y:86.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_7,p:{rotation:-21.8,x:62.3,y:178.2,regY:33,regX:-0.7}},{t:this.ikNode_8,p:{regY:33.1,rotation:-22.9,x:116.5,y:149.9,regX:16.6}},{t:this.ikNode_2,p:{regX:20.7,rotation:-2.9,x:22,regY:51.2,y:98.3}}]},1).wait(1));

	// legs
	this.instance = new lib.leg();
	this.instance.parent = this;
	this.instance.setTransform(8.6,84.4,1,1,15);

	this.instance_1 = new lib.leg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(80));

	// foots
	this.instance_2 = new lib.foot();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.1,153.9,1,0.877,0,-165,15);

	this.instance_3 = new lib.foot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.8,37,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(80));

	// shadow
	this.instance_4 = new lib.shadow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-69,18,1,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-10.8,263.1,229.2);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		game.init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// main
	this.character = new lib.character();
	this.character.name = "character";
	this.character.parent = this;
	this.character.setTransform(753.1,500.2,0.939,0.939,0,0,0,49,99.2);

	this.timeline.addTween(cjs.Tween.get(this.character).wait(1));

	// background
	this.instance = new lib.bedroom();
	this.instance.parent = this;
	this.instance.setTransform(421,-72,2.494,2.494);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1221,428,1246.9,1015);
// library properties:
lib.properties = {
	id: '0E65A7CE26B9C04DB51A9A94D4E9472D',
	width: 1600,
	height: 1000,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_.png?1528996755287", id:"game_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0E65A7CE26B9C04DB51A9A94D4E9472D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;