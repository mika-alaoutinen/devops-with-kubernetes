declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      CHAT_SERVICE_URL: string;
      NATS_URL: string;
      PORT: string;
    }
  }
}

export {};
