declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      MESSAGE?: string;
      PORT?: string;
      PINGPONG_READINESS_CHECK?: string;
      PINGPONG_URL?: string;
    }
  }
}

export {};
