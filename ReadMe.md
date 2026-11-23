# Cyberpunk Creative Portfolio // 個人賽博龐克作品集網站

> **專案名稱**：Cyberpunk Creative Portfolio  
> **創作者**：Leo 'Cyberpulse' Chen (2D Digital Concept Artist)  
> **技術棧**：React 19 + Tailwind CSS + Vite + Lucide React  
> **風格定位**：Cyberpunk Glass-Tech / 2D Digital Art Showcase

---

## 視覺與系統設計特色

本作品集完整依據 `docs/PRD.md` 規格與 `references/stitch/` 設計系統（包含 `DESIGN.md` 定義的色彩體系、角切導角、HUD 科技數據儀表、掃描線效果）進行高擬真模組化建構：

1. **Cyberpunk Glass-Tech 視覺語言**：
   - **核心基底色**：深黑底色（`#09090F` / `#131319`），配合 16-24px 背景高斯模糊與半透明玻璃質感面板。
   - **高對比霓虹三色**：電光藍（`#00F5FF`，互動重點與標靶線框）、電光紫（`#9D4EDD`，結構裝飾與次要狀態）、霓虹粉（`#FF2E93`，重要告警與狀態點）。
   - **軍規科技細節**：45 度角切裁切（Chamfered cuts `hud-bracket`）、L 型十字十字線標記、CRT 水平掃描線層（Scanline overlay）。
   - **Typography**：標題採用 `Space Grotesk`，標籤與等寬數據採用 `Space Mono`，中文與內文支援 `Noto Sans TC`。

2. **完整單頁式架構（Single Page Application）**：
   - **01. HERO（主視覺區）**：全天候連線狀態儀表、雙語核心簡介、GPU/Keyframe 緩衝數據條、雙 CTA 與鍵盤快捷鍵 `⌘K`、8K 主視覺畫框與分層 PSD 檢查彈窗（Layer Pass Inspector）。
   - **02. WORKS（精選作品區）**：作品分類篩選（全部、角色設計、概念藝術、數位插畫、平面設計）、高科技作品卡片、高解析度彈窗（含作品詳細介紹、前/後一張切換、150% 放大檢視、4 階段創作流程拆解、設計理念與使用工具）。
   - **03. ABOUT（關於我與技能檔案）**：個人特遣身分卡（ID: NX-7091）、生化監測頭像、東方賽博龐克創作理念、歷年職涯時間軸、16 格塊狀技能進度條（Digital Painting、Character Design 等）、雙環形 SVG 儀表盤、核心軟體生產力矩陣（Ps、Ai、Procreate）與可供下載的數位藝術履歷檔案。
   - **04. CONTACT（通訊終端區）**：即時接案狀態信標（4/6 Slots Reserved）、雨夜街區意象窗、一鍵複製 Email 通訊錄與社群矩陣、即時欄位格式檢驗之神經傳輸表單（含即時 1200 字元計數器與 NDA 協議勾選）、送出後之專屬 Hash 封包回條成功彈窗、FAQ Bento 網格。
   - **HUD Header & Footer**：滾動自動追蹤當前章節高亮（ScrollSpy）、固定懸浮毛玻璃效果、RWD 手機版收合選單、即時指令調度器（Command Palette `⌘K` / `Ctrl+K`）。

---

## 模組化元件架構

所有元件皆遵從高內聚、低耦合的模組化拆分：

```
src/
├── App.jsx                       # 根應用元件，組合佈局與全域彈窗狀態
├── main.jsx                      # React 19 進入點
├── index.css                     # Tailwind 指令、角切 clip-path、霓虹發光樣式
├── hooks/
│   └── useActiveSection.js       # 滾動監聽自動追蹤當前頁面區塊 (01-04)
├── data/
│   ├── artworks.js               # 作品集資料庫（含創作理念、工具、四階段工作流）
│   ├── skills.js                 # 技能分佈、雷達數據、軟體矩陣
│   ├── timeline.js               # 職涯經歷 Chrono-log
│   └── profile.js                # 創作者基本檔案、社群連結、簡介
└── components/
    ├── common/
    │   ├── Header.jsx            # 頂部導航列、在線狀態、手機選單
    │   ├── Footer.jsx            # 頁尾版權、座標讀數、置頂回到最上方
    │   ├── ScanlineOverlay.jsx   # 全域 CRT 掃描線光柵層
    │   ├── BackgroundGlows.jsx   # 賽博氛圍光暈球
    │   └── CommandPalette.jsx    # ⌘K / Ctrl+K 終端指令快速調度器
    ├── hero/
    │   ├── HeroSection.jsx       # Hero 區塊容器
    │   ├── TelemetryRibbon.jsx   # 頂部座標、神經頻率數據條
    │   ├── HeroBio.jsx           # 霓虹標題、動態微儀表、CTA 按鈕
    │   ├── HeroViewport.jsx      # 右側 8K 主視覺畫框與視差裝飾
    │   └── LayerInspectionModal.jsx # PSD 分層 Occlusion 通道檢查視窗
    ├── works/
    │   ├── WorksSection.jsx      # 作品展示容器
    │   ├── TopTelemetryStrip.jsx # 數據串流安全條
    │   ├── CategoryFilter.jsx    # 分類篩選按鈕列
    │   ├── ArtworkCard.jsx       # 模組化作品卡片
    │   ├── ArtworkModal.jsx      # 完整詳細介紹彈窗（含放大、前後切換）
    │   └── DataStreamMetricBar.jsx # 終端 TIFF / PSD 請求通訊條
    ├── about/
    │   ├── AboutSection.jsx      # 關於我區塊容器
    │   ├── AboutHeader.jsx       # 機密存取授權標題
    │   ├── ArtistIdCard.jsx      # 生化特遣證卡與創作哲學
    │   ├── CareerTimeline.jsx    # 創作歷程時間軸
    │   ├── SkillGauge.jsx        # 16 格區塊科技進度條
    │   ├── DonutGauge.jsx        # SVG 環形雙儀表
    │   ├── SoftwareMatrix.jsx    # 核心生產力軟體矩陣
    │   └── DossierDownloadBar.jsx # 履歷下載條
    └── contact/
        ├── ContactSection.jsx    # 聯絡終端容器
        ├── ContactHeader.jsx     # 通訊埠與頻率標題
        ├── CommissionBeacon.jsx  # 接案信標與負載容量條
        ├── RainAlleyPlate.jsx    # 雨夜街區視差視窗
        ├── CommsDirectory.jsx    # 通訊錄與一鍵複製信箱
        ├── ContactForm.jsx       # 神經傳輸聯絡表單（含驗證）
        ├── SuccessModal.jsx      # 送出成功回執封包彈窗
        └── BentoFaq.jsx          # FAQ 模組化 Bento 磚
```

---

## 實際安裝與依賴版本

專案使用以下現代前端開發環境配置：

| 套件 / 工具 | 實際安裝版本 | 用途說明 |
| :--- | :--- | :--- |
| **Node.js** | `v20.18.0` (LTS) | 伺服端 JavaScript 執行環境 |
| **npm** | `10.8.2` | 模組套件管理器 |
| **React** | `^19.3.1` | 前端宣告式 UI 核心框架 |
| **React DOM** | `^19.3.1` | React 瀏覽器渲染器 |
| **Vite** | `^6.4.6` | 新一代超高速專案建置與開發伺服器 |
| **@vitejs/plugin-react** | `^4.7.0` | Vite 的官方 React 支援外掛 |
| **Tailwind CSS** | `^3.4.17` | 原子化實用優先 CSS 樣式系統 |
| **PostCSS** | `^8.5.33` | CSS 轉換工具 |
| **Autoprefixer** | `^10.6.2` | 瀏覽器 CSS 前綴自動補全 |
| **Lucide React** | `^1.73.0` | 現代幾何科技圖示庫 |

---

## 啟動方式與本機網址

### 1. 安裝相依套件（若在全新環境）
```bash
npm install
```

### 2. 啟動本機開發伺服器
```bash
npm run dev
```

啟動後終端將顯示本機伺服器網址：
- **本機網址**：`http://localhost:5173/`
- **區域網路**：`http://127.0.0.1:5173/`

### 3. 生產環境編譯
```bash
npm run build
```
產出的靜態資源位於 `dist/` 目錄，可直接無縫部署至 **Render**、Vercel 或 Netlify。

### 4. 預覽生產環境編譯版本
```bash
npm run preview
```

---

## 驗證結果與功能驗證清單

經過嚴格編譯與功能測試，各項規格驗證結果如下：

- [x] **建置驗證**：執行 `npm run build` 成功完成生產打包，無任何型別或語法錯誤（產出 `dist/index.html`、`dist/assets/*.css`、`dist/assets/*.js`）。
- [x] **視覺風格驗證**：符合 Cyberpunk 深色、霓虹青/紫/粉、掃描線、網格、Chamfered 角切裁切與 HUD 排版規範。
- [x] **01. Hero**：正常呈現自我介紹、微量儀表、CTA 按鈕與互動式 PSD 圖層檢查彈窗。
- [x] **02. Works**：
  - [x] 5 大分類（全部、角色設計、概念藝術、數位插畫、平面設計）即時篩選無延遲。
  - [x] 點擊任一作品卡片可開啟高解析度模組視窗。
  - [x] 支援鍵盤左/右鍵或按鈕進行「上一張 / 下一張」輪播切換。
  - [x] 支援圖片「100% / 150%」放大檢視。
  - [x] 完整展示中文「創作理念」、「設計概念 & 使用工具」、「4 階段創作過程」。
- [x] **03. About**：
  - [x] 正常展示特遣身分證卡、雙語創作理念。
  - [x] 垂直歷程時間軸節點正常排列。
  - [x] 16 格塊狀科技進度條與雙環形 SVG 儀表盤正確映射數值。
  - [x] 軟體矩陣與額外管線技能標籤清楚標記。
  - [x] 點擊「DOWNLOAD DOSSIER」按鈕可觸發動態履歷檔案下載。
- [x] **04. Contact**：
  - [x] 一鍵點擊「COPY」按鈕可將信箱複製到剪貼簿並給予「COPIED!」視覺反饋。
  - [x] 聯絡表單具備完整的前端資料校驗（姓名必填、Email 正則表達式驗證、訊息最少 10 字元、即時字元計數）。
  - [x] 表單提交後生成隨機交易雜湊序號（Packet Hash，如 `#TX-8A4F-NODE2088`）並展示炫酷回執彈窗。
- [x] **全域輔助功能**：按下 `⌘K` 或 `Ctrl+K`（或點擊頂部快捷按鈕）可隨時喚起賽博龐克終端指令搜尋盤，快速跳轉區塊或打開作品。

---

## 尚未完成 / 未來擴充項目

1. **後端郵件發送服務對接**：
   - 目前表單已具備完備的前端驗證與模擬封包生成。若需在正式環境真實發送信件給創作者，需於 Render 串接後端 API（如 Node.js Express / Resend / EmailJS / SendGrid）。
2. **WebGL / Canvas 雨滴與粒子流**：
   - 目前採用高效能 CSS 掃描線與模糊光暈。未來可進一步引進 Three.js 或 Canvas 2D，實作帶有景深重力模擬的賽博龐克雨絲與光斑視差。
3. **音效回饋系統（Cyber SFX）**：
   - 可在使用者點擊按鈕、切換作品卡片或開啟終端時，利用 Web Audio API 加入微弱的短促合成電子音（Beep/Click/Hum）。
