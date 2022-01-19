import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';

@Injectable()
export class MovieMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('test middleware ' + new Date)
    next()  
  }
}
