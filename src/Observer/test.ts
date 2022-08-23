import { NewsSubject } from './NewsSubject';
import { NewsObserver } from './NewsObserver';

test('updates should be equal', () => {
    const subject: NewsSubject = new NewsSubject();

    const observer1: NewsObserver = new NewsObserver();
    const observer2: NewsObserver = new NewsObserver();
    const observer3: NewsObserver = new NewsObserver();

    subject.subscribe(observer1);
    subject.subscribe(observer2);
    subject.subscribe(observer3);

    subject.notify('hello');

    expect(observer1.lastNotify[0]).toBe('hello');
    expect(observer2.lastNotify[0]).toBe('hello');
    expect(observer3.lastNotify[0]).toBe('hello');
});
