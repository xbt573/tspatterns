import { IPlatform } from './IPlatform';

export class LinuxPlatform implements IPlatform {
    public platform(): string {
        return 'linux';
    }
}
