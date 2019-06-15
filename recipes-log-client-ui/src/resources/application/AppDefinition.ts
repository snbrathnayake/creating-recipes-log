import { ApplicationApi } from "./application-api";

export interface AppDefinition {
    readonly api: ApplicationApi;
    readonly apiVersion: string;
    readonly useVersioning: boolean;
  }
  