
var HelloWorldLayer = cc.Layer.extend({
    layerl:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var layerl = new cc.LayerColor(cc.color.RED,100,100);
        layerl.ignoreAnchor = false;
        layerl.setAnchorPoint(0.5,0.5);
        layerl.setPosition(50,size.height/2);
        //上面创建的局部临时函数，须定义layerl层的一属性指向此函数
        this.layerl=layerl;
        this.addChild(this.layerl);

        //构造函数中的this指实例化出的对象 即layer
        //默认回调updata
        //this.scheduleUpdate();
        this.schedule(this.myCallBack,0.002,cc.REPEAT_FOREVER,0);
        return true;
    },
    update:function(dt){
        this.layerl.x+=1;
    },
    myCallBack:function(){
        var a;
        if(this.layerl.x===cc.winSize.width-50){
            a=-1
            this.layerl.x+=a;
        }
        else{
            a=1;
            this.layerl.x+=a
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

