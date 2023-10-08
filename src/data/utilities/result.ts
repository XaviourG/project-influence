export interface Result<T> {
  isSuccess: boolean,
  error: string,
  data: T,
}

export class ResultFactory {
  static createSuccess = <T,>(data: T): Result<T> => ({
    isSuccess: true,
    error: '',
    data,
  });

  static createFailure = <T,>(error: string): Result<T> => ({
    isSuccess: false,
    error,
    data: null as unknown as T,
  });
}