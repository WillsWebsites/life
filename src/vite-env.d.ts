/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INTRO_COMPLETE?: string
  readonly VITE_SINGULARITY_COMPLETE?: string
  readonly VITE_BIG_BANG_COMPLETE?: string
  readonly VITE_FATE_COMPLETE?: string
  readonly VITE_CELL_COUNT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
