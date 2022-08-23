import { Part } from './Part';

export class PersonalComputer {
    public parts: Part[] = [];

    public getParts(): Part[] {
        return this.parts;
    }
}
