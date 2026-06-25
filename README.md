# Themes V3 Replica

复刻 `https://themes.xiaoman.cn/v3/` 的 B2B 跨境独立站模板图库体验。

## 内容

- 顶部 Themes 品牌区与搜索入口
- B2B 跨境独立站模板首屏
- 行业筛选 chip
- 模板卡片网格、悬浮预览层与精选标识
- 搜索弹窗、快速链接、搜索结果状态
- 移动端行业折叠和单列模板流

## 本地预览

```bash
python3 -m http.server 4180 --directory .
```

打开 `http://127.0.0.1:4180/`。

## 验证

已用本机 Chrome + Playwright 检查：

- 桌面 1440px：4 列网格、16 张模板卡片、15 个行业 chip
- 移动 390px：1 列网格、行业栏折叠
- 搜索关键词“工业”：进入搜索结果状态并筛出 2 张卡片
- 无横向溢出、无控制台错误
