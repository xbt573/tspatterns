import { IObservable } from './interfaces/IObservable';
import { IObserver } from './interfaces/IObserver';

export class NewsSubject implements IObservable {
    private _observers: Set<IObserver> = new Set<IObserver>;

    subscribe(observer: IObserver): void {
        this._observers.add(observer);
    }

    unsubscribe(observer: IObserver): void {
        this._observers.delete(observer);
    }

    notify(...args: unknown[]): void {
        this._observers.forEach(observer => observer.notify(...args));
    }
}
