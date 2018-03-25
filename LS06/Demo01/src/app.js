
var HelloWorldLayer = cc.Layer.extend({
    //定义精灵属性
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var layerl1 = new cc.LayerColor(cc.color.RED,200,200);
        layerl1.ignoreAnchor=false;
        layerl1.x=size.width/2;
        layerl1.y=size.height/2;
        this.addChild(layerl1);

        var layerl2 = new cc.LayerColor(cc.color.YELLOW,200,200);
        layerl2.ignoreAnchor=false;
        layerl2.x=size.width/6;
        layerl2.y=size.height/2;
        this.addChild(layerl2);

        var layerl3 = new cc.LayerColor(cc.color.BLUE,200,200);
        layerl3.ignoreAnchor=false;
        // layerl3.x=size.width*5/6;
        // layerl3.y=size.height/2;
        layerl3.setPosition(size.width*5/6,size.height/2);
        this.addChild(layerl3);
        return true;
    }
});
//定义场景对象
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

