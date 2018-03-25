
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var startMenuItem = new cc.MenuItemFont("开始",function(){
            cc.log("开始按钮点击啦！");
            },this);
        var setMenuItem = new cc.MenuItemFont("设置",function(){
            cc.log("设置按钮点击啦！");
        },this);
        var ttf=new cc.LabelTTF('其他','',30);
        var otherMenuItem = new cc.MenuItemFont(ttf,function(){
            cc.log("其他按钮点击啦！");
        },this);
        setMenuItem.x=startMenuItem.x+100;
        var menu = new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        menu.alignItemsHorizontallyWithPadding(size.width*0.2);
        this.addChild(menu);


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

