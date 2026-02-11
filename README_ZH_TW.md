# SDKMAN GUI

JavaFX版本，請看：[sdkman-gui](https://github.com/youngledo/sdkman-gui)。

[English](README.md) | **繁體中文** | [简体中文](README_ZH.md)

跨平台桌面應用，基於**Tauri + Vue + Rust**開發，為[SDKMAN](https://github.com/sdkman)提供優雅的圖形化介面。

## 🎬 示範

<img src="demo/images/zh/home.png" alt="home">
<img src="demo/images/zh/jdk.png" alt="jdk">
<img src="demo/images/zh/sdk.png" alt="sdk">
<img src="demo/images/zh/settings.png" alt="settings">

**[📹 觀看此影片](https://github.com/user-attachments/assets/596a526b-a808-4beb-87f3-d9b257142874)**

## ✨ 特性

- 💻 **跨平台** - 支援Windows、macOS、Linux
- 🎨 **現代化UI** - 基於Vue 3的精美介面設計
- 🌍 **國際化支援** - 支援中英文，自動偵測系統語言
- 🌗 **主題切換** - 支援淺色/深色主題及自動模式
- 📦 **SDK管理** - 瀏覽、安裝、解除安裝、切換SDK版本
- 🔍 **搜尋篩選** - 快速查找所需的SDK
- 🏷️ **分類瀏覽** - 按類別查看SDK（Java、建置工具、程式語言等）
- ⚡ **原生效能** - Rust後端提供最佳效能
- 🔒 **安全可靠** - 無外部執行時依賴，最小化攻擊面

## 🛠️ 技術棧

- **前端**: Vue 3 + TypeScript + Vite
- **後端**: Rust + Tauri 2.0
- **UI元件**: 自訂元件 + CSS變數
- **狀態管理**: Pinia
- **國際化**: Vue-i18n

## 📦 安裝

### macOS

**手動安裝：**
從 [Releases](https://github.com/youngledo/sdkman-gui-native/releases) 下載對應架構的DMG檔案：
- Apple Silicon：`sdkman-gui_*_aarch64.dmg`
- Intel：`sdkman-gui_*_x64.dmg`

### Windows

從 [Releases](https://github.com/youngledo/sdkman-gui-native/releases) 下載並執行安裝程式：
- `sdkman-gui_*_x64-setup.exe`

### Linux

**Debian/Ubuntu：**
```bash
# 從releases下載.deb套件
wget https://github.com/youngledo/sdkman-gui-native/releases/download/v1.0.0/sdkman-gui_1.0.0_amd64.deb
sudo dpkg -i sdkman-gui_1.0.0_amd64.deb
```

**AppImage：**
```bash
# 從releases下載AppImage
wget https://github.com/youngledo/sdkman-gui-native/releases/download/v1.0.0/sdkman-gui_1.0.0_amd64.AppImage
chmod +x sdkman-gui_1.0.0_amd64.AppImage
./sdkman-gui_1.0.0_amd64.AppImage
```

### 前置需求

⚠️ **必須先安裝SDKMAN：**
```bash
curl -s "https://get.sdkman.io" | bash
```

## 🌍 國際化

應用支援以下語言：

- 🇺🇸 English（英文）
- 🇨🇳 简体中文
- 🇹🇼 繁體中文

語言會根據系統設定自動選擇，也可以在設定頁面手動切換。

## 🎨 主題

支援三種主題模式：

- **淺色主題**（Light）- 明亮清爽
- **深色主題**（Dark）- 護眼舒適
- **自動模式**（Auto）- 跟隨系統設定

## 📝 使用說明

### 探索SDK

1. 打開應用後，預設進入「首頁」頁面
2. 瀏覽可用的SDK列表
3. 使用分類篩選或搜尋功能快速定位
4. 點擊「安裝」按鈕即可安裝SDK

### 管理已安裝的SDK

1. 切換到「JDK」或「SDK」頁面
2. 查看所有已安裝的SDK和版本
3. 可以：
   - 設定預設版本
   - 安裝新版本
   - 解除安裝不需要的版本
   - 切換版本

### SDK詳情管理

1. 點擊任意SDK查看詳細資訊
2. 瀏覽所有可用版本
3. 管理單個版本：
   - 安裝特定版本
   - 解除安裝版本
   - 設定為預設版本
   - 查看安裝狀態和進度

### 設定應用

1. 切換到「設定」頁面
2. 可設定：
   - 介面主題
   - 顯示語言
   - 代理設定
   - SDKMAN路徑

## 🔧 設定檔

應用設定保存在：`~/.config/sdkman-gui/config.json`

設定範例：

```json
{
  "language": "zh-TW",
  "theme": "auto",
  "proxy_type": "none",
  "proxy_host": null,
  "proxy_port": null,
  "sdkman_path": "/Users/username/.sdkman"
}
```

## 🏗️ 開發

### 前置需求

- Node.js
- Rust
- npm

### 開始開發

```bash
# 複製儲存庫
git clone https://github.com/youngledo/sdkman-gui-native.git
cd sdkman-gui-native

# 安裝依賴
npm install

# 開發模式執行
npm run tauri dev

# 建置生產版本
npm run tauri build
```

### 本機打包

在目前作業系統上打包可安裝檔案：

```bash
cd /Users/samwang/Repo/sdkman-gui-native
chmod +x build.sh
./build.sh
```

可選方式（不包含 `build.sh` 裡的產物重新命名邏輯）：

```bash
npm install
npm run tauri build
```

產物輸出目錄：

- macOS: `src-tauri/target/release/bundle/dmg/`
- Windows: `src-tauri/target/release/bundle/msi/`
- Linux: `src-tauri/target/release/bundle/deb/` 與 `src-tauri/target/release/bundle/rpm/`

## 🙏 致謝

- [SDKMAN](https://sdkman.io/) - 優秀的SDK管理工具
- [Tauri](https://tauri.app/) - 建構更小、更快、更安全的桌面應用
- [Vue.js](https://vuejs.org/) - 漸進式JavaScript框架
