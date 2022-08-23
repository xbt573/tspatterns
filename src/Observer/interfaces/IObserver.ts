export interface IObserver {
    notify(...args: unknown[]): void;
}
