### 概述
Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务可以交由 Worker 线程执行，主线程（通常负责 UI 交互）能够保持流畅，不会被阻塞或拖慢。

Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

Web Worker 有以下几个使用注意点。
- （1）同源限制
  - 分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

- （2）DOM限制
  - Woker所在的全局对象，与主线程不一样，无法读取主线程所在的网页`DOM`对象，也无法使用`document`、`window`、`parent`这些对象。
  - 只提供`navigator`和`parent`对象

- （3）全局对象限制
  - Worker的全局对象为`WorkerGlobalScope`
  - 不同于网页的全局对象`window`,很多接口拿不到

- （4）通信限制
  - Worker县城和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成

- (5) 脚本限制
  - Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

- （6）文件限制
  - Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

### 基本使用

##### 主线程
主线程采用new命令，调用Worker()构造函数，新建一个 Worker 线程。

```
var worker = new Worker('work.js');
```

Worker()构造函数的参数是一个脚本文件，该文件就是 Worker 线程所要执行的任务。由于 Worker 不能读取本地文件，所以这个脚本必须来自网络。如果下载没有成功（比如404错误），Worker 就会默默地失败。

```
worker.postMessage();
worker.onMessage();
worker.terminate();
```

- 主线程调用`worker.postMessage()`方法，向 Worker 发消息。
- 主线程通过`worker.onmessage()`指定监听函数，接收子线程发回来的消息。
- Worker 完成任务以后，主线程就可以把它关掉。`worker.terminate()`;

##### Worker线程

```
self.addEventListener
self.onmessage
self.postMessage()
self.close()
```