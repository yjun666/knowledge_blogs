export interface Api {
  readonly search: any;
  readonly create: any;
  readonly delete: any;
  readonly query: any;
  readonly login: any;
}


export class ApiConfig implements Api {
  readonly search: { method: string, url: string };
  readonly create: { method: string, url: string };
  readonly delete: { method: string, url: string };
  readonly query: { method: string, url: string };
  readonly login: { method: string, url: string };
}

