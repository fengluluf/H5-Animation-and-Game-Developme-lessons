var FirstLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var sp1 = new cc.Sprite(res.Red_png);
        sp1.x=100;
        sp1.y=100;
        this.addChild(sp1);

        var sp2 = new cc.Sprite(res.Yellow_png);
        sp2.x=200;
        sp2.y=200;
        this.addChild(sp2);
        return true;
    }
});
//定义场景类
var FirstScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        //定义层类
        var layer = new FirstLayer();
        this.addChild(layer);
    }
});