class HttpError extends Error {
  statusCode: number;

  constructor (status: number, msg?: string) {
    super(msg); 
    this.statusCode = status;
  }
}

export default HttpError;