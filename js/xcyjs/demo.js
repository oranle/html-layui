/**
 项目JS主入口
 以依赖layui的layer和form模块为例
 **/
layui.define(['layer', 'form'], function (exports) {
    var layer = layui.layer
        ,form = layui.form;

    console.log("=====xcy======");

    layer.msg('hello world by xcy');

    exports('demo', {})
});