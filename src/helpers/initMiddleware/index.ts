/* eslint-disable no-unused-vars */
import { CorsRequest } from 'cors';

interface ICorsResponse {
  statusCode?: number | undefined;
  setHeader(key: string, value: string): any;
  end(): any;
}

type ICorsMiddleware = (req: CorsRequest, res: ICorsResponse, next: (err?: any) => any) => void;

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export const initMiddleware = (middleware: ICorsMiddleware) => {
  return (req: CorsRequest, res: ICorsResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};