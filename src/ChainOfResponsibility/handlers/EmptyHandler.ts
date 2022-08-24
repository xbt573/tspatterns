import { BaseHandler } from './BaseHandler';

export class EmptyHandler extends BaseHandler {
    public handle(request: string): boolean {
        if (request.trim() == '') return false;
        if (!this._next) return true;

        return this._next.handle(request);
    }
}
