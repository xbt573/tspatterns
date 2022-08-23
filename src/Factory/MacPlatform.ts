import { IPlatform } from './IPlatform';

export class MacPlatform implements IPlatform {
    public platform(): string {
        return 'darwin';
    }
}
