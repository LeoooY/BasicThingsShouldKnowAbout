> "当你给网页或者网页应用编写客户端的JavaScript时， 你很快会遇上应用程序接口（API ）—— 这些编程特性可用来操控网站所基于的浏览器与操作系统的不同方面，或是操控由其他网站或服务端传来的数据。在这个单元里，我们将一同探索什么是API，以及如何使用一些在你开发中将经常遇见的API"
                                                                          - MDN


目录
- Web API简介
  - 了解有哪些API
- 操作文档（DOM）
  - DOM API介绍
- 从服务器获取数据
  - fetch api和XMLHTTPRequest
- 第三方API
  - 介绍浏览器API和第三方API的差别和一些典型应用
- 绘制图形
  - 浏览器包含的强大的t图形编程工具
    - SVG（可缩放矢量图形语言）
    - canvas（HTML绘制元素）
      - Canvas
      - WebGL
- 视频和音频API
  - HTML5能够通过元素标签嵌入富媒体
  - `<video>`和`<audio>`
  - 介绍自定义播放控制等
- 客户端存储
  - >现代web浏览器拥有很多不同的技术，能够让你存储与网站相关的数据，并在需要时调用它们，能够让你长期保存数据、保存离线网站及其他实现其他功能。本文解释了这些功能的基本原理。


### Web API简介
- 什么是API？：
>应用程序接口（API）是基于编程语言构建的结构，使开发人员更容易地创建复杂的功能。它们抽象了复杂的代码，并提供一些简单的接口规则直接使用。
-MDN

简单来说，API是把底层代码封装后提供的的操作接口，比直接编写计算机的GPU等功能的底层代码更容易。

##### 客户端JavsScrip中的API（区别于服务器端Js）
他们本身不是Js语言的一部分，却建立在Js语言的核心顶部，为Js提供额外的能力。
通常分为两类：
- 浏览器API
  - 内置于Web浏览器中，能从浏览器和电脑周边环境中提取数据
  - 比如[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)一些简单的JavaScript结构以获得位置数据（提供定位API）
- 第三方API
  - 一般情况不会内置在浏览器中，通常必须在Web中的某个地方获取代码和信息。（网站API，通过特定地址访问）
  - 比如百度地图API，微博数据API等

##### JavaScript,API和其他JavaScript工具之间的关系
- JavaScript: 内置于浏览器的高级脚本语言
  - >您可以用来实现Web页面/应用中的功能。注意JavaScript也可用于其他象Node这样的的编程环境。但现在您不必考虑这些。
- 客户端API：内置于浏览器的结构程序，位于JavaScript语言顶部
  - >使您可以更容易的实现功能。
- 第三方API：置于第三方普通的结构程序（例如Twitter，Facebook，百度，weibo）
  - >使您可以在自己的Web页面中使用那些平台的某些功能（例如在您的Web页面显示最新的Tweets）
- JavaScript库：包含一个或多个功能的JavaScript文件。
  - >把这些文件关联到您的Web页以快速或授权编写常见的功能。例如包含jQuery和Mootools
- JavaScript框架：从库开始的下一步，JavaScript框架视图把HTML、CSS、JavaScript和其他安装的技术打包在一起，然后用来从头编写一个完整的Web应用。
  - 常见Vue react Angular

##### API可以做什么
常见浏览器API
- 操作文档API（DOM API）
  - >内置于浏览器中。最明显的例子是DOM（文档对象模型）API，它允许您操作HTML和CSS — 创建、移除以及修改HTML，动态地将新样式应用到您的页面，等等。每当您看到一个弹出窗口出现在一个页面上，或者显示一些新的内容时，这都是DOM的行为。 您可以在在Manipulating documents中找到关于这些类型的API的更多信息。
- 从服务器获取数据的API
  - 重点XMLHTTPrequest和fetch API
  - >用于更新网页的一小部分是相当好用的。这个看似很小的细节能对网站的性能和行为产生巨大的影响 — 如果您只是更新一个股票列表或者一些可用的新故事而不需要从服务器重新加载整个页面将使网站或应用程序感觉更加敏感和“活泼”。使这成为可能的API包括XMLHttpRequest和Fetch API。您也可能会遇到描述这种技术的术语Ajax。您可以在Fetching data from the server找到关于类似的API的更多信息。 
- 用于绘制和操作图形的API
- 音视频API
- 设备API
  - 位置，通知，振动等
- 客户端存储API


### DOM API
- 文档对象模型
  - HTML被解析为DOM树
  - 每个元素或文本在数中都有它的一个入口，称为节点
    - 元素节点
    - 根结点
    - 子节点：一个节点的儿子节点
    - 后代节点：一个节点任意子孙的节点
    - 父节点
    - 兄弟节点
    - 文本节点

- 基本操作
  - 元素选择
    - 主流方法
      - 使用css选择器选择元素，如Document.querySelector('.main')
      - Document.querySelector(),匹配符合的第一个元素，返回一个对象
      - Document.querySelectorAll()，匹配所有符合的元素，返回一个Array对象
    - 更旧的方法
      - Document.getElementById()
      - Document.getElementsByTagName()
      - Document.getElementsByClassName()
      - ......
  - 创建和放置新的节点
    - 创建元素节点： Document.createElement()
     - `javascript
        var para = document.createElement('p');para.textContent = 'We hope you enjoyed the ride.';`
    - 创建文本节点： Document.createTextNode()
    - 放置到DOM树中:Node.appendChild()
      - 对Node节点添加子节点
  - 删除和移动节点
    - Node.removeChild() 删除节点
    - Node.cloneNode() 创建节点的副本
  - 操作样式
    - Node.style.
      - color
      - padding 
      - width
      - textAlign
      - backgroundColor
      - 和css样式相同，注意-替换成驼峰规则
    - 设置元素属性 Node.setAttribute()
      - 例如设置class Node.setAttribute('class',main)
##### DOM API更多方法
- [Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)
- [Window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)
- [Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)
- [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement),[HTMLInputElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement),[HTMLImageElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)..etc
