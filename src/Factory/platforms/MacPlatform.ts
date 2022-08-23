import { IPlatform } from '../interfaces/IPlatform';

export class MacPlatform implements IPlatform {
    public platform(): string {
        return 'darwin';
    }
}
