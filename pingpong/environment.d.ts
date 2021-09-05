declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_NAME?: string;
      POSTGRES_HOST?: string;
    }
  }
}

export {};
