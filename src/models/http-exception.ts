export default class HttpException extends Error {
  public status: number;
  public message: string;
  public timestamp: number;
  constructor(message: string, status: number = 500) {
    super(message);
    this.status = status;
    this.message = message;
    this.timestamp = Date.now();
  }
}
