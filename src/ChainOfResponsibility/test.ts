import { UndefinedHandler } from './handlers/UndefinedHandler';
import { EmptyHandler } from './handlers/EmptyHandler';
import { HelloHandler } from './handlers/HelloHandler';

test('should return true', () => {
    const undefinedHandler: UndefinedHandler = new UndefinedHandler();
    const emptyHandler: EmptyHandler = new EmptyHandler();
    const helloHandler: HelloHandler = new HelloHandler();

    undefinedHandler.setNext(emptyHandler);
    emptyHandler.setNext(helloHandler);

    expect(undefinedHandler.handle('hello')).toBe(true);
});
