import { PlatformFactory } from './PlatformFactory';

test(`equal to '${process.platform}'`, () => {
    expect(PlatformFactory.create().platform()).toBe(process.platform);
});
