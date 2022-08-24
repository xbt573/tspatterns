import { Handler } from '../interfaces/Handler';

export class BaseHandler implements Handler {
    protected _next?: Handler;

    public setNext(handler: Handler): void {
        this._next = handler;
    }

    public handle(request: string): boolean {
        return true;
    }
}
