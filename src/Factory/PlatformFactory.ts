import { IPlatform } from './IPlatform';

import { LinuxPlatform } from './LinuxPlatform';
import { WindowsPlatform } from './WindowsPlatform';
import { MacPlatform } from './MacPlatform';

export class PlatformFactory {
    static create(): IPlatform {
        switch (process.platform) {
            case 'linux': return new LinuxPlatform();
            case 'win32': return new WindowsPlatform();
            case 'darwin': return new MacPlatform();
            default: throw new Error('unknown platform');
        }
    }
}
