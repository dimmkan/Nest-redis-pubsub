export interface IBodyType {
  description: string;
  payload: Record<
    string,
    {
      values?: any[];
      type?: string;
      isRequired?: boolean;
    }
  >;
}
