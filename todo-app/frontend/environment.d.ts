declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      VUE_APP_BACKEND_URL: string
    }
  }
}

export {};
