declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      NATS_URL: string;
      PORT: string;
    }
  }
}

export {};
