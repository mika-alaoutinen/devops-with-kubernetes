declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      PORT: string;
    }
  }
}

export {};
