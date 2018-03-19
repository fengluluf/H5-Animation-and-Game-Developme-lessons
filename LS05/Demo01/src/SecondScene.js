var SecondLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var bg = new cc.Sprite(res.Bg);
        bg.x=size.width/2;
        bg.y=size.height/2;
        this.addChild(bg);

        var plane = new cc.Sprite(res.Plane);
        plane.x=350;
        plane.y=800;
        this.addChild(plane);
        //plane.runAction(cc.moveBy(2,0,300));
        plane.setAnchorPoint(1.5,0.5);
        plane.runAction(cc.rotateBy(1,90).repeatForever());//旋转
        return true;
    }
});
//定义场景类
var SecondScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        //定义层类
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});