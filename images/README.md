# 星空主题团队介绍页面

![alt text](images/image.png)

一个现代化、动态且具有沉浸感的团队介绍网页，融合了星空背景、随机形状云朵和创意文字动画效果。
![alt text](images/image-1.png)
## ✨ 特性

- **动态星空背景**：带有星星、随机形状星云云朵和流星效果
- **交互式体验**：鼠标移动时星云和背景会响应变化
- **创意文字效果**：文字随机滚动和打字机效果
- **团队成员展示**：团队成员卡片带有悬停动画
- **响应式设计**：适配各种屏幕尺寸
- **分类筛选**：可按职能类别筛选团队成员
- **滚动动画**：页面元素在滚动到可视区域时呈现淡入效果
- **数据统计**：动态数字增长统计效果
![alt text](images/image-2.png)
## 🛠️ 技术栈

- HTML5
- CSS3 (过渡、动画、变形等现代特性)
- JavaScript (原生，无依赖)
- 响应式设计
- Font Awesome 图标库
![alt text](images/image-3.png)
## 🚀 快速开始

### 本地运行

1. 克隆项目到本地：

```bash
git clone https://github.com/li-xiu-qi/starry-team-intro.git
cd starry-team-intro
```

2. 直接在浏览器中打开 `index.html` 文件即可查看效果。

### 部署到服务器

本项目是纯静态网站，可以部署到任何支持静态网站托管的平台：

- GitHub Pages
- Netlify
- Vercel
- 或任何传统虚拟主机

## 📁 项目结构

```
starry-team-intro/
├── index.html          # 主HTML文件
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript功能实现
└── README.md           # 项目说明文档
```

## 🔧 自定义

### 修改团队成员信息

编辑 `js/main.js` 文件中的 `teamMembers` 数组以添加、修改或删除团队成员：

```javascript
const teamMembers = [
    {
        id: 1,
        name: "成员姓名",
        role: "职位",
        category: "职能类别", // management, development, design, marketing
        bio: "个人简介",
        image: "成员照片URL",
        social: {
            weixin: "#",  // 社交媒体链接
            github: "#",
            // 其他社交媒体...
        }
    },
    // 更多成员...
];
```

### 修改颜色和风格

在 `css/style.css` 文件中修改CSS变量来自定义界面颜色：

```css
:root {
    --primary: #6c63ff;    /* 主色调 */
    --secondary: #ff6b6b;  /* 次要色调 */
    --accent: #43cea2;     /* 强调色 */
    --dark: #333333;       /* 深色 */
    --light: #f9f9f9;      /* 浅色 */
    /* 星云颜色 */
    --nebula1: rgba(138, 43, 226, 0.4); /* 紫色星云 */
    --nebula2: rgba(255, 105, 180, 0.3); /* 粉色星云 */
    --nebula3: rgba(64, 224, 208, 0.3); /* 青色星云 */
    --nebula4: rgba(255, 215, 0, 0.2); /* 金色星云 */
}
```

## 📝 许可证

[MIT](LICENSE) © [li-xiu-qi]


