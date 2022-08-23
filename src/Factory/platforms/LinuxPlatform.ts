import { IPlatform } from '../interfaces/IPlatform';

export class LinuxPlatform implements IPlatform {
    public platform(): string {
        return 'linux';
    }
}
