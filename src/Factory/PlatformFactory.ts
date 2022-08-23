import { IPlatform } from './interfaces/IPlatform';

import { LinuxPlatform } from './platforms/LinuxPlatform';
import { WindowsPlatform } from './platforms/WindowsPlatform';
import { MacPlatform } from './platforms/MacPlatform';

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
