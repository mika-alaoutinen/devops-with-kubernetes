declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME?: string;
      DB_HOST?: string;
    }
  }
}

export {};
