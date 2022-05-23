class ApiError {
  public code: number;
  public message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  static customError(code: number, err: any) {
    return new ApiError(code, err.message);
  }

  static badRequest(msg: string) {
    return new ApiError(400, msg);
  }

  static internalServerError(msg: string) {
    return new ApiError(500, msg);
  }
}

export default ApiError;
