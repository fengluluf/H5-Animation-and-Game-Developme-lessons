
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layerl = new cc.LayerColor(cc.color.RED,200,200);
        var layer2 = new cc.LayerColor(cc.color.YELLOW,200,200);
        var layer3 = new cc.LayerColor(cc.color.BLUE,200,200);
        var layer4 = new cc.LayerColor(cc.color.GREEN,100,100);
        //使用锚点
        layerl.ignoreAnchor = false;
        layer2.ignoreAnchor = false;
        layer3.ignoreAnchor = false;
        layer4.ignoreAnchor = false;
        //设置锚点位置 可影响平移、旋转、缩放
        layerl.setAnchorPoint(0,0);
        layer2.setAnchorPoint(1,1);
        layer3.setAnchorPoint(1,0);
        layer4.setAnchorPoint(0,0);

        // layerl.setPosition(size.width/2,size.height/2);
        // layer2.setPosition(size.width/2,size.height/2);
        layerl.setPosition(50,50);
        layer2.setPosition(size.width-50,size.height-50);
        layer3.setPosition(size.width-50,50);
        layer4.setPosition(50,50);
        //旋转
        //layerl.rotation = 45;

        //缩放
        //layerl.scale = 0.5;

        this.addChild(layerl);
        this.addChild(layer2);
        this.addChild(layer3);
        layerl.addChild(layer4);

        layerl.setLocalZOrder(10);
        layer4.setLocalZOrder(9);
        var point = layerl.convertToWorldSpaceAR(layer4.getPosition());
        cc.log(point.x,point.y);

        //旋转动画
        layer2.runAction(cc.rotateBy(2,180).repeatForever());
        layer3.runAction(cc.rotateBy(2,180).repeatForever());

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

