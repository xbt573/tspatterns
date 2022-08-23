import { IPlatform } from '../interfaces/IPlatform';

export class WindowsPlatform implements IPlatform {
    public platform(): string {
        return 'win32';
    }
}
