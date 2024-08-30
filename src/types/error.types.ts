export type TData = {
  error: {
    statusCode: number;
  };
  errorMessage: [];
  message: string;
  stack: string;
  success: boolean;
};

export type TError = {
  status: number;
  data: TData;
};
