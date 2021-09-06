declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_HOST?: string;
      POSTGRES_DATABASE?: string;
    }
  }
}

export {};
