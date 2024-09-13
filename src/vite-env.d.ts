/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_BASE_URL: string
  readonly VITE_APP_MSW_ENABLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
