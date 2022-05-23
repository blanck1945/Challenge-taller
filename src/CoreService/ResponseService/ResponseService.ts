import { Response } from "express";
import { lifeCicles } from "../types/enums";

class ResponseService {
  static responseMessages = {
    CUSTOM_RESPONSE: "Custom response",
    HAS_ERROR: "has errors",
    ARE_CORRECT: "are correct",
  };
  
  static succesResponse(res: Response, data: any) {
    return res.send({
      state: true,
      lifecycle: lifeCicles.endSuccess,
      data,
    });
  }

  static errorResponse(err: any, status: number, message: string) {
    return {
      state: false,
      lifecycle: lifeCicles.failedError,
      status,
      message: message ?? "Error",
      err,
    };
  }
}

export default ResponseService;
