import { Part } from './types/Part';

export class PersonalComputer {
    public parts: Part[] = [];

    public getParts(): Part[] {
        return this.parts;
    }
}
