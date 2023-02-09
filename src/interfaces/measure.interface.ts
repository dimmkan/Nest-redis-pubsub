export interface IMeasure {
  id: number;
  task: string;
  parameters: {
    timeout?: number;
    dn: string;
    reqId: string;
    operator: string;
    filialId: number;
  };
}
