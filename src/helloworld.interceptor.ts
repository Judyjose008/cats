import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HelloWorldInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    console.log("Before entering the contoller")
    // This code will run after the code executes logic from contoller
    return next.handle().pipe( tap(() => console.log(`Hello World!`)));
  }
}