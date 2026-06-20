# 技术栈说明
| 模块 | AI 的核心职责 | 开发侧 的核心职责 |
| :--- | :--- | :--- |
| **对话层 (LLM)** | 严格按协议输出 JSON，包含表情分类与意图指令。 | 编写 System Prompt 约束；处理 API 响应流。 |
| **UI 状态机** | 提供逻辑建议，协助设计状态机切换条件。 | 使用 React `useState` 或 `Zustand` 管理全局 UI 状态。 |
| **渲染层 (Avatar)** | 提供表情编码定义，供前端渲染映射。 | 集成 Lottie/Live2D 资源，建立编码到动画的映射。 |
| **语音层 (STT/TTS)** | 解析语义，协调音频情感流。 | 集成 Web Speech API 或 ElevenLabs 等 SDK。 |


# 开发流程

## 1. 环境初始化：使用 Vite + React 配置开发环境，并通过 .env 进行 API Key 的隔离管理。



## 2. 布局构建：利用 Framer Motion 的 layout 属性实现形象容器从全屏到分屏的平滑过渡。



## 3. 协议联调：配置 System Prompt 强制 LLM 输出上述结构化 JSON。



## 4. 渲染映射：将 expression 编码映射至具体的动画文件 (Lottie/Live2D)。




## 5. 语音集成：接入 ASR (语音转文字) 和 TTS (文字转语音)，实现音频流与 Avatar 口型的同步。
