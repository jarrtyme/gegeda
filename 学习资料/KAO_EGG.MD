目标：
1、让你想明白接口你就会写了 只要返回json数据（注：唯一拿捏不好的是接口里面的逻辑）
2、express/koa/koa2/egg 框架大致都会用

一、koa 相当于es6 生成器语法generator
1、生成 demo-koa框架代码
    koa demo-koa 
    cd demo-koa
    cnpm i
    cnpm run dev
2、显示文字（普通文字、接口数据、获取地址栏GET、POST参数）

写hello 并且封装 
1、app中注册导入
    //导入
    var test = require("./routes/test");
    //注册
    app.use(test.routes(), test.allowedMethods());
2、router配置路由
    var router = require("koa-router")();
    router.prefix("/test");
    const controller = require(process.cwd() + `/controller/test`);
    router.get("/index", controller.index);
    // router.get("/index", function* (next) {
    //   this.body = " hello this is a index index!";
    // });
    module.exports = router;
3、controller中写逻辑
    exports.index = function* (next) {
    //   this.body = " hello this is a index index!";
    //   console.log(`get 参数=`, this.query);
    //   this.body = {
    //     meta: { state: 200, msg: "hello this is a index index!12" },
    //     data: null,
    //   };
    // return sendJson(this, 200, `成功`);

    1、获取参数
    2、过滤
        try {    
        3、操作数据库
        4、返回数据
        } catch (error) {
        return sendJson(this, 500, (msg = `操作失败`), (data = null));
        }
    };
4、配置utils.sendJson方法
    global.sendJson = (_this, state, msg, data = null) => {
    return (_this.body = {
        meta: {
        state,
        msg,
        },
        data,
    });
    };

二、koa2 相当于es6 async语法
1、生成 demo-koa2框架代码
    koa2 demo-koa2
    cd demo-koa2
    cnpm i
    cnpm run dev
2、显示文字（普通文字、接口数据、获取地址栏GET、POST参数）

写hello 并且封装 
1、app中注册导入
    //导入
    const test = require("./routes/test");
    //注册
    app.use(test.routes(), test.allowedMethods());
2、router配置路由
    const router = require("koa-router")();
    router.prefix("/test");
    const controller = require(process.cwd() + `/controller/test`);
    router.get("/index", controller.index);
    // router.get("/index", function (ctx, next) {
    //   ctx.body = "hello test1212";
    // });
    module.exports = router;
3、controller中写逻辑
    exports.index = function (ctx, next) {
    // ctx.body = "hello test121231232112";
    // return sendJson(ctx, 200, (msg = `hahahaha`), (data = null));
        1、获取参数
    2、过滤
        try {    
        3、操作数据库
        4、返回数据
        } catch (error) {
        return sendJson(ctx, 500, (msg = `操作失败`), (data = null));
        }
    };
4、配置utils.sendJson方法
    global.sendJson = (ctx, state, msg, data = null) => {
    return (ctx.body = {
        meta: {
        state,
        msg,
        },
        data,
    });
    };

三、egg 后端思想
1、生成 demo-egg框架代码
 egg-init demo-egg --type=simple //多按几个回车
 cd demo-egg
 cnpm i
 cnpm run dev    # 注意看提示让你通过http://127.0.0.1:7001来访问
2、显示文字（普通文字、接口数据、获取地址栏GET、POST参数）

写hello 并且封装 
1、配置路由
    module.exports = (app) => {
    const { router, controller } = app;
    router.get("/", controller.home.index);
    // 访问规则 写啥访问啥
    // 这边写啥 地址栏就去那个目录访问
    router.get("/tes/index", controller.test.index);
    };
2、写逻辑
    const Controller = require("egg").Controller;
    class TestController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = "hi, test";
          ctx.body = {
            meta: {
                state: 200,
                msg: `chengong `,
            },
            data: null,
            };
        }
    }
    module.exports = TestController;
3、封装方法
    module.exports = {
    sendJson(ctx, state, msg, data = null) {
        ctx.body = {
        meta: {
            state,
            msg,
        },
        data,
        };
      },
    };