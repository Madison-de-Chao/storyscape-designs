
## 建議方案：同專案內的模組化分離

### 核心思路
在同一個專案中保留兩部作品，但為第二部建立獨立的視覺系統模組，完全分開圖片渲染邏輯。

### 1. 節點 ID 規範確認
- **第一部**：保持 `yi1-` 前綴（如 `yi1-ch1-1`）
- **第二部**：使用 `yi2-` 前綴（如 `yi2-prologue-1`, `yi2-ch1-intro`）
- 這樣能清楚區分兩部作品的資料

### 2. 為第二部建立獨立的視覺系統

#### 新增檔案結構
```
src/
├── assets/
│   ├── scenes/          # 第一部的場景圖片（現有）
│   └── yi2/
│       ├── backgrounds/  # 背景圖案（可平鋪或循環）
│       ├── characters/   # 人物立繪（透明 PNG）
│       └── ui/           # 第二部專用 UI 元素
├── components/game/
│   ├── SceneImage.tsx           # 第一部：全場景背景
│   └── CharacterScene.tsx       # 第二部：背景圖案 + 立繪
├── data/
│   ├── yi1/             # 第一部數據（現有）
│   └── yi2/
│       ├── sceneConfig.ts    # 背景圖案 + 立繪配置
│       ├── prologueNodes.ts  # 重新命名為 yi2- 前綴
│       └── chapter1Nodes.ts
```

### 3. 第二部的視覺配置設計

```typescript
// src/data/yi2/sceneConfig.ts
interface Yi2SceneConfig {
  nodePattern: RegExp;
  background: {
    type: 'pattern' | 'gradient' | 'image';
    src?: string;           // 背景圖案
    color?: string;         // 漸層底色
    animation?: 'float' | 'pulse' | 'none';
  };
  characters: {
    id: string;             // 角色 ID
    src: string;            // 立繪圖片
    position: 'left' | 'center' | 'right';
    expression?: string;    // 表情變化
    animation?: 'fadein' | 'slidein' | 'bounce';
  }[];
}
```

### 4. 新增 CharacterScene 組件

為第二部建立專用的場景渲染組件：
- 背景層：支援圖案平鋪、漸層、或簡單場景
- 角色層：支援多個立繪同時顯示（左中右位置）
- 對話層：可與角色立繪互動（說話時有微動效果）

### 5. GameScene 的條件渲染

```typescript
// src/components/game/GameScene.tsx
{currentPart === 'yi' ? (
  <SceneImage nodeId={currentNodeId} />
) : (
  <CharacterScene nodeId={currentNodeId} />
)}
```

### 6. 共享的系統保持統一
- 存檔/讀檔系統（已支援 `yi` 和 `yi-part2`）
- 成就系統
- 音效/BGM 系統
- 進度追蹤

### 7. 遷移步驟
1. 將現有 `yi-prologue-*` 節點改為 `yi2-prologue-*`
2. 建立 `src/data/yi2/` 資料夾結構
3. 建立 `CharacterScene` 組件
4. 建立立繪 + 背景圖案的配置系統
5. 修改 `gameStore` 中的 `currentPart` 類型為 `'yi1' | 'yi2'`（更清晰）

### 好處
- 保持單一專案，玩家無需跳轉
- 兩部視覺系統完全獨立，互不干擾
- 共享核心功能（存檔、成就、音效）
- 資源按需載入，不會增加第一部的載入時間
- 未來可擴展第三部、第四部...
