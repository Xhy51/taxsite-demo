# 胡威宝会计税务所网站 v0.1.0

这是一个为胡威宝会计税务所构建的专业税务服务网站，提供美国公司注册、报税和税务咨询服务。

## 功能特性

- **主页**：展示服务概述和英雄区域。
- **关于我们**：介绍事务所背景和使命。
- **服务**：详细描述公司注册、报税服务和税务咨询。
- **联系我们**：提供联系表单和事务所信息。
- **移动端响应式**：支持桌面和移动设备。
- **表单提交**：联系表单数据以 CSV 格式存储。
- **SEO 优化**：每个页面包含元数据。

## 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **图标**：Lucide React
- **表单**：React Hook Form + Zod
- **测试**：Jest + React Testing Library
- **部署**：兼容 Vercel、Netlify 等平台

## 安装与运行

### 前置条件

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

### 运行测试

```bash
npm test
```

## 部署

1. 推送到 GitHub 仓库。
2. 使用 Netlify 自动部署：
   - 连接 GitHub 仓库。
   - 设置构建命令：`npm run build`。
   - 设置发布目录：`.next`（Netlify 会自动处理 Next.js）。
3. 或者手动部署到服务器。

### Netlify 配置

项目包含 `netlify.toml` 文件，用于自定义构建设置。如果需要，可以调整环境变量或重定向。

## 项目结构

```
taxsite/
├── app/                    # Next.js App Router 页面
│   ├── about/              # 关于我们页面
│   ├── api/                # API 路由
│   │   └── contact/        # 联系表单 API
│   ├── contact/            # 联系我们页面
│   ├── services/           # 服务页面
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 主页
├── components/             # 可复用组件
│   ├── ContactForm.tsx     # 联系表单
│   ├── Footer.tsx          # 页脚
│   ├── Header.tsx          # 导航栏
│   ├── Hero.tsx            # 英雄区域
│   └── ServiceCard.tsx     # 服务卡片
├── __tests__/              # 测试文件
├── submissions/            # 表单数据存储 (CSV)
├── package.json            # 项目配置
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
└── README.md               # 项目说明
```

## 联系信息

- **事务所**：胡威宝会计税务所
- **联系人**：胡威宝
- **地址**：729B Sacramento St., #6, San Francisco, CA 94108
- **电话**：415-819-1248
- **传真**：877-496-9298
- **邮箱**：henryhuea@aol.com

## 许可证

本项目采用 MIT 许可证。