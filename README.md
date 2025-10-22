# Kubernetes Dashboard

一个用于展示Kubernetes集群namespace和deployment信息的React前端应用。

## 功能特性

- 📊 展示多个namespace的CPU、内存和告警信息
- 🚀 显示每个namespace中资源使用量最高的5个deployment
- 📈 单行deployment展示，鼠标悬停显示详细pod信息
- 🔍 每个pod显示独立的CPU和内存使用情况
- ⚠️ 鼠标悬停告警信息显示详细告警详情和受影响的pod列表
- 📊 生成趋势图功能（按钮）
- 📱 响应式设计，支持移动端

## 项目结构

```
dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Namespace.js      # Namespace组件
│   │   └── Deployment.js     # Deployment组件
│   ├── data/
│   │   └── mockData.js       # 模拟数据
│   ├── App.js                # 主应用组件
│   ├── index.js              # 入口文件
│   └── index.css             # 样式文件
├── package.json
└── README.md
```

## 安装和运行

1. 安装依赖：
```bash
cd /home/xintang/code/dashboard
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 在浏览器中访问 `http://localhost:3000`

## 组件说明

### Namespace组件
- 显示namespace名称
- 展示CPU、内存使用情况
- 显示告警数量（带颜色指示）
- 鼠标悬停告警信息显示详细告警详情
- 列出该namespace下的deployment

### Deployment组件
- 单行显示deployment名称、CPU、内存和pod数量
- 鼠标悬停在"Pods"按钮上显示详细pod列表
- 每个pod显示独立的CPU和内存使用情况
- 提供生成趋势图的按钮

## 模拟数据

项目包含三个模拟的namespace：
- `default`: 包含nginx、redis、api-server等deployment
- `production`: 包含生产环境的web-frontend、database-cluster等
- `staging`: 包含测试环境的test-api、staging-frontend等

## 样式特性

- 现代化的卡片式布局
- 渐变色彩设计
- 悬停效果和动画
- 响应式网格布局
- 移动端适配

## 技术栈

- React 18
- Lucide React (图标)
- CSS3 (样式)
- 模拟数据API

## 未来扩展

- 集成真实的Kubernetes API
- 添加实时数据更新
- 实现真实的趋势图生成
- 添加更多监控指标
- 支持集群切换
