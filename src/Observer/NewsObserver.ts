import { IObserver } from './interfaces/IObserver';

export class NewsObserver implements IObserver {
    public lastNotify: unknown[] = [];

    notify(...args: unknown[]): void {
        this.lastNotify = args;
    }
}
