import { PersonalComputer } from './PersonalComputer';
import { Cpu } from './parts/Cpu';
import { Gpu } from './parts/Gpu';
import { Ram } from './parts/Ram';
import { Hdd } from './parts/Hdd';

export class PersonalComputerBuilder {
    private _personalComputer: PersonalComputer;

    public constructor() {
        this._personalComputer = new PersonalComputer();
        return this;
    }

    public addCpu(cpu: Cpu): PersonalComputerBuilder {
        this._personalComputer.parts.push(cpu);
        return this;
    }

    public addGpu(gpu: Gpu): PersonalComputerBuilder {
        this._personalComputer.parts.push(gpu);
        return this;
    }

    public addRam(ram: Ram): PersonalComputerBuilder {
        this._personalComputer.parts.push(ram);
        return this;
    }

    public addHdd(hdd: Hdd): PersonalComputerBuilder {
        this._personalComputer.parts.push(hdd);
        return this;
    }

    public getValue(): PersonalComputer {
        return this._personalComputer;
    }

    public reset(): void {
        this._personalComputer.parts = [];
    }
}
