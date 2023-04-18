export function generatePayloadType(metric_key: {
  description: string;
  payload: Record<
    string,
    {
      values?: any[];
      type?: string;
      isRequired?: boolean;
    }
  >;
}): Record<string, unknown> {
  return Object.entries(metric_key.payload).reduce((acc, [key, value]) => {
    const type = value.values ? value.values[0] : value.type;

    const isRequired = value.isRequired ? !(value.isRequired as boolean) : true;

    acc[key] = isRequired ? type : `${type}?`;

    return acc;
  }, {} as Record<string, unknown>);
}
