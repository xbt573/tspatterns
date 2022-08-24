import { BaseHandler } from './BaseHandler';

export class UndefinedHandler extends BaseHandler {
    public handle(request: string): boolean {
        if (!request || typeof request === 'undefined') return false;
        if (!this._next) return true;

        return this._next.handle(request);
    }
}
