# I/O-WEB
react框架 使用next.js
# Patrick 2024/1/20
  npm run dev或npm start启动（start启动前先npm run build）
  已完成基本框架搭建，登录注册找回部分功能基本完成，界面待改
  结构：MenuContent文件夹下是控制台的几个切换界面；
        locales文件夹下是语言切换；
        page.tsx是各个页面的路由；
  目前问题：页面渲染会出错，导致404错误，初步判断为Window not defined问题，尚未解决