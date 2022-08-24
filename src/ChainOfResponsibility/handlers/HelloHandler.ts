import { BaseHandler } from './BaseHandler';

export class HelloHandler extends BaseHandler {
    public handle(request: string): boolean {
        if (request != 'hello') return false;
        if (!this._next) return true;

        return this._next.handle(request);
    }
}
