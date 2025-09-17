# 《AI辅助React Web应用开发实践：基于React 19和GitHub Copilot》图书配套代码

本代码仓库是《**AI辅助React Web应用开发实践：基于React 19和GitHub Copilot**》图书的配套代码。

## `oh-my-chat` 样例应用

`oh-my-chat` (《我聊》) 是一款基于React技术开发的Web聊天应用，是本书的核心案例。推荐读者从<https://github.com/evisong/oh-my-chat>或<https://gitee.com/evisong/oh-my-chat>克隆本代码仓库，以便获取最新的代码和更新。

本[`snapshots`](../../tree/snapshots)分支将各个章节的代码按目录平铺在一起，方便读者查看和学习。每个`ch*`开头的目录都包含了相应章节的代码，如`ch01_3_5`包含了1.3.5节的代码。请查看各个目录中的`README.md`文件以获取更多信息。此外，`docs`目录包含了本书的部分彩图及其他相关资源。

如果希望查看`oh-my-chat`代码演进的过程，请查看[`main`](../../tree/main)分支，及其[代码提交历史](../../commits/main)，或使用`git`命令检出`main`分支到本地进一步查看。

### 安装运行

```sh
npm install
cd ch01_3_5 # 进入对应章节目录
npm run dev
```

## 关于本书

《**AI辅助React Web应用开发实践：基于React 19和GitHub Copilot**》由人民邮电出版社于2025年9月出版，作者是宋一玮。本书旨在系统介绍React框架，围绕React 19的核心开发范式——函数组件和Hooks展开，并以一款聊天应用的开发为例演示如何运用现代React技术开发Web应用。另外，本书还探讨了AI辅助技术在React前端开发中的应用实践。

全书的知识地图如下：
![Overall mind-map](docs/images/01-1-overall_mindmap.png)
[下载原图](docs/images/01-1-overall_mindmap.png)

除了配套代码，本书也提供了配套视频课程（连载中），课程目录如下：

1. React在AI时代的机遇与本课程学习路径
2. 快速上手React项目：从环境搭建到第一个聊天应用
3. JSX不是HTML：语法糖、元素类型与实战模式
4. 从需求到组件树：组件拆分与Hooks基础
5. 数据驱动：props、state、context 全景图
6. 单向数据流：跨组件通信不再乱
7. 何时执行副作用：useEffect执行与清理全解析
8. 合成事件PK原生DOM事件：受控组件实践
9. 组件样式工程化：从CSS Modules到CSS-in-JS
10. 渲染还是不渲染：读懂React生命周期和渲染机制
11. 不可变数据不踩坑：Zustand + Immer高效管理应用状态
12. 性能不佳怎么办：组件与应用级性能优化全解
13. 可扩展的React代码：自定义Hooks与组件复用实战
14. 单页应用路由怎么玩：React Router与代码懒加载实战
15. 表单不止受控组件：React 19新特性与React Hook Form
16. 与服务器通信：网络请求与React Query实战
17. 项目质量怎么保证：端到端与单元测试全流程
18. 前端工程化全链路：Vite、TypeScript与CI/CD
19. React架构如何选型：CSR/SSR/SSG与Next.js
20. AI时代前端新玩法：聊天机器人功能实战与创新

欢迎扫描以下二维码购买本书：

![Buy book QRCode](docs/images/buy-book-qrcode.png)

欢迎广大读者阅读本书，并提出宝贵意见和建议，谢谢！

----

![Book cover](docs/images/book-cover.png)
