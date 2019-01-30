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

### 从服务器获取数据

##### Ajax开始
>这导致了创建允许网页请求小块数据（例如 HTML, XML, JSON, 或纯文本) 和 仅在需要时显示它们的技术，从而帮助解决上述问题。
-MDN

>注意：在早期，这种通用技术被称为Asynchronous JavaScript and XML（Ajax）， 因为它倾向于使用XMLHttpRequest 来请求XML数据。 但通常不是这种情况 (你更有可能使用 XMLHttpRequest 或 Fetch 来请求JSON), 但结果仍然是一样的，术语“Ajax”仍然常用于描述这种技术

>为了进一步提高速度，有些网站还会在首次请求时将资产和数据存储在用户的计算机上，这意味着在后续访问中，他们将使用本地版本，而不是在首次加载页面时下载新副本。 内容仅在更新后从服务器重新加载。

##### 基本的Ajax请求
- XMLHttpRequest(XHR)
  - XHR
```JavaScript
var request=new XMLHTTPRequest();
request.open('get',url);
request.responseType='text';
```
从网络获取资源使一个异步操作，这意味着：
必须等待该操作完成，才能对该响应（response）执行其他操作，否则会抛出错误。

XHR允许使用`onload`来处理这个事件
```JavaScript
request.onload=function(){
  console.log(request.response);
  ...
}
```

以上，完成了request的设置，使用`request.send()`来发起请求

##### Fetch
>Fetch API基本上是XHR的一个现代替代品。它是最近在浏览器中引入的，它使异步HTTP请求在JavaScript中更容易实现，对于开发人员和在Fetch之上构建的其他API来说都是如此。

fetch()返回一个promise，它将解析从服务器发回的响应：

```JavaScript
fetch(url).then(respose=>respose.text())
          .then(text=>{
            console.log(text);
            ......
          })

```
我们调用了fetch()方法，将我们要获取的资源的URL传递给它。这相当于现代版的XHR中的request.open(),另外，您不需要任何等效的send()方法。

使用.then来执行后续代码，这相当于XHR版本中的`onload`事件来处理
>大多数现代的JavaScript api都是基于promises的。

实际上，传递给 then() 是一段不会立即执行的代码 — 而是当返回响应时代码会被运行。注意，你还可以选择把你的 promise 保存到一个变量里, 链接 .then() 在相同的位置。下面的代码会做相同的事情:
```JavaScript
let myFetch=fetch(url);

myFetch.then(res=>res.text()) 
       .then(text=>{
         console.log(text);
         ...
         ...
       })
```
response 对象有个 text()方法, 获取响应主体中的原始数据a并把它转换成纯文本,`它也返回一个promise` 

只有在兼容老浏览器时候使用`XHRHttpRequest`


##### 第三方API
网站提供的API
>第三方API，从某种角度讲，是植根于第三方服务器上的。要通过 JavaScript获取它们，您首先需要链接到其功能接口上并使其在您的页面上生效。通常来说，这首先需要您通过一个 `<script>` 元素连接到第三方服务器所开放的JavaScript库，如下所示：
-MDN

>Note: 一些api处理对其功能的访问略有不同，相反，它们要求开发人员向特定的URL模式发出HTTP请求(参见从服务器获取数据)，以检索特定的数据。这些被称为RESTful api，稍后我们将在文章中展示这个示例。
-MDN

RestFul-API:
>instead of getting data using the features of a `JavaScript library` like we did with Google Maps, we get data by making `HTTP requests to specific URLs`, with data like search terms and other properties encoded in the URL (often as URL parameters). This is a common pattern you'll encounter with APIs.
通过向特定的URLs（`接口`）发送请求来获取数据，而不是通过引入`JavaScript库`来获取数据
- GoogleMap API
- NytimeAPI
- Youtube video API


看Url就知道要什么
看http method就知道干什么
看http status code就知道结果如何

REST描述的是在网络中client和server的一种交互形式；REST本身不实用，实用的是如何设计 RESTful API（REST风格的网络接口）

- [怎样用通俗的语言解释REST，以及RESTful？ - 覃超的回答 - 知乎
](https://www.zhihu.com/question/28557115/answer/48094438)

### 绘制图形
- Canvas
- WebGL

### 视频和音频
HTML5视频和音频
`<video>`和`<audio>`元素允许我们把视频和音频嵌入到网页当中。就像我们在音频和视频内容文中展示的一样，一个典型的实现如下所示：
```JavaScript
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```
-  `control`属性
- 重点：自定义播放控制
  - HTMLMediaElement API

##### HTMLMediaElement API



### 客户端存储

- 传统方法cookies
  - 除了支持旧浏览器，一般不使用cookie进行客户端存储了
  - 对于大多数项目来说，您不需要再使用它们了。
- 新方法Web Storage和IndexDB
  - Web Storage API提供了一种非常简单的语法，用于存储和检索较小的、由名称和相应值组成的数据项，比如用户的名字，用户是否登陆，屏幕背景使用了什么颜色等等，这是非常有用的。
  - Indexed DB API为浏览器提供了一个完整的数据库系统来存储复杂的数据。这可以用于存储从完整的用户记录到甚至复杂的数据类型，如音频或者视频文件
- 未来 Cache API
  - 一些现代浏览器支持新的Cache API
  - 这个API是为存储特定HTTP请求的响应文件而设计的，它对于像存储离线文件这样的事非常有用，这样网站就可以在没有网络链接的情况下使用。
  - 缓存Cache通常于Service Worker API结合使用


#### 存储简单数据 Web Storage
基本语法
所有的Web Storage数据都包含在浏览器内两个类似于对象的结构的
  - sessionStorage：只要浏览器开着，数据就会一直保存（关闭浏览器时数据丢失）
  - localStorage：一直保存数据，重启浏览器不会影响数据

使用`Storage.setItem()`方法来保存一个数据项
- 接受两个参数
  - 数据项名字
  - 值
`Storage.getItem(key)`方法获取已经存储的数据项
`Storage.removeItem(key)`方法删除数据项


##### 数据会一直存在（localStorage）
数据在不同页面加载时都存在（对localstorage而言甚至是关闭浏览器后）
对于sessionStorage在关闭页面或者关闭浏览器后，数据项就不存在了

##### 每个域分别存储
不同域的Storage存储无法交叉访问

>这是有道理的 - 你可以想象如果网站能够查看彼此的数据，就会出现安全问题！
-MDN

#### 复杂数据存储Indexed DB
有时简称IDB，是可以在浏览器中访问的一个完整的数据库
- 在这里可以存储复杂的关系数据
- 可以在Indexed DB中存储图像、视频..etc
- 代价是使用Indexed DB比Web StorageAPI更复杂

简单操作：

- 数据库初始化
  - 需要在页面完整加载后才可以使用Indexed DB
    - window.indexedDB.open()
    - request.onerror
    - request.onsuccess
    - request.onupgradeneeded 



### Cache API 和 Service Worker 离线页面



