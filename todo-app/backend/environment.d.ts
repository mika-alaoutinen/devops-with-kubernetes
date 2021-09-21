declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      NATS_URL: string;
      PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_HOST?: string;
      POSTGRES_DATABASE?: string;
    }
  }
}

export {};
