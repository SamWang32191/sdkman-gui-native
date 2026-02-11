import { createI18n } from 'vue-i18n'
import { invoke } from '@tauri-apps/api/core'
import en from './locales/en.json'
import zh from './locales/zh.json'
import zhTw from './locales/zh-TW.json'

export type AppLocale = 'en' | 'zh' | 'zh-TW'

const SUPPORTED_LOCALES: AppLocale[] = ['en', 'zh', 'zh-TW']

function isTraditionalChineseLanguage(language: string): boolean {
  return (
    language.startsWith('zh-tw') ||
    language.startsWith('zh-hk') ||
    language.startsWith('zh-mo') ||
    language.includes('-hant')
  )
}

// 检测系统语言
export function detectLocaleFromSystemLanguage(
  language = navigator.language || (navigator as any).userLanguage
): AppLocale {
  const browserLanguage = String(language || '').toLowerCase()

  // 中文语系细分：繁体（zh-TW / zh-HK / zh-Hant）与简体
  if (browserLanguage.startsWith('zh')) {
    return isTraditionalChineseLanguage(browserLanguage) ? 'zh-TW' : 'zh'
  }

  // 默认返回英语
  return 'en'
}

// 获取初始语言设置
const systemLanguage = detectLocaleFromSystemLanguage()

const i18n = createI18n({
  legacy: false,
  locale: systemLanguage, // 使用系统语言作为初始值
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    'zh-TW': zhTw,
  },
})

// 更新托盘菜单的语言
export async function updateTrayLanguage(locale: string) {
  const resolvedLocale = SUPPORTED_LOCALES.includes(locale as AppLocale)
    ? locale as AppLocale
    : 'en'
  const messages = i18n.global.messages.value[resolvedLocale] as any
  if (messages && messages.tray) {
    try {
      // 构建托盘菜单项配置
      const menuItems = [
        { id: 'quit', label: messages.tray.quit }
      ]

      await invoke('update_tray_menu', { items: menuItems })
    } catch (error) {
      console.error('Failed to update tray menu:', error)
    }
  }
}

export default i18n
