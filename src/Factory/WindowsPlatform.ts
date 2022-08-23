import { IPlatform } from './IPlatform';

export class WindowsPlatform implements IPlatform {
    public platform(): string {
        return 'win32';
    }
}
