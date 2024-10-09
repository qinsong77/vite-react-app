/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_BASE_URL: string
  readonly VITE_APP_MSW_ENABLE: string
  readonly mode: 'development' | 'staging' | 'production' | 'test' | 'mock'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
