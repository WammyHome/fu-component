# 一起看看 JavaScript 的几种模块化方案

**前端周刊 - 第13期 - SAFS Fund FE - Dengdeng**

早期，我们在写`JavaScript`时代码量少，可能几个func就能够解决问题，但是当页面逻辑较为复杂的时候，我们就不得不引入`模块化`的思想。

js一直希望和服务端语言一样拥有大规模编程的能力，直到`ES2015`，即现在的`ES6`才真正纳入规范。

## 1. 早期的模块化解决方案

早期为使得`JavaScript`具备模块化的能力，开源社区的大神前赴后继提出了替代的解决方案。

### 1.1 AMD

- 异步加载，依赖后置。

- 浏览器在线模块化解决方案。

- 需要使用[require.config](http://requirejs.org/docs/api.html#config)配置模块路径。

- 定义模块

``` js
// fu-Component.js
define(function(){ 
    return {
        greet: function() { 
            alert('Fucking Awesome! Dengdeng');
        }
        // ...
    }
})
```

- 加载模块

``` js
// main.js
require(['jquery','fu-component'], function($, fc){ 
    $(document).ready(function(){ 
        fc.greet();
    })
})

```

> Tips: 目前我们在 `FundManagement` 和 `Wise` 中大量使用`AMD`的模块化加载方案，把页面上的大量js代码拆分成逻辑接近的模块，再从页面入口`main.js`消费这些实现抽象定义好的模块。

### 1.2 CommonJS

- 同步加载，适用于`非浏览器`环境

- 基于`nodejs`环境，伴随nodejs的发展

- 暴露模块

``` js
// fu-Component.js
var FundComponent = {
    greet: function() {
        // 此处alert无法使用，因为nodejs环境中没有window对象，而alert() 其实是 window.alert()
        // alert('Fucking Awesome! Dengdeng');
        console.log('Fucking Awesome! Dengdeng');
    }
}
module.exports = FundComponent; 
```

- 加载模块

``` js
// main.js
var $ = require('node_modules/jquery-1.12.0.js'); // 加载jquery插件
var fc = require('./fu-Component.js'); // 加载模块
fc.greet();

```

> Tips: `nodejs` 的出现让 `JavaScript` 拥有了不依赖于浏览器的开发环境，加上 `npm` 包管理工具使得我们能够在本地进行大规模编程，`gulp` 和 `webpack` 这些有名的构建工具正是在这个环境下开发的，包括很多第三方库 `jquery` 和框架 `vue` 都是基与此开发，测试，最后发布出来为大家所用。

- 例如：使用npm包管理工具，安装jquery库

``` npm
 npm install jquery --save--dev
```

## es6 编译

``` npm
    npm run dev
```

## API

Name | Type | Return |
---- | ---- | ----: |
setName | func | void |
getName | func | String |
sayHello | func | void |