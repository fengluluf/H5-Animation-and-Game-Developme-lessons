
var HelloWorldLayer = cc.Layer.extend({
    label:null,
    second:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var labelTTF=new cc.LabelTTF('玩家1：',"","64");
        labelTTF.x=180;
        labelTTF.y=size.height-100;
        labelTTF.setFontFillColor(cc.color.RED);
        this.addChild(labelTTF);

        this.label=labelTTF;
        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);

        return true;
    },
    myTimer:function(dt){
        this.label.setString("玩家1："+parseInt(this.second));
        this.second+=1;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

