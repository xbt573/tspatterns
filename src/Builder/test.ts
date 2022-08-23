import { PersonalComputerBuilder } from './PersonalComputerBuilder';
import { PersonalComputer } from './PersonalComputer';
import { Cpu } from './parts/Cpu';
import { Gpu } from './parts/Gpu';
import { Ram } from './parts/Ram';
import { Hdd } from './parts/Hdd';

test('personal computer should have all parts', () => {
    const pcBuilder = new PersonalComputerBuilder();
    const pc: PersonalComputer = pcBuilder
        .addCpu(new Cpu())
        .addGpu(new Gpu())
        .addRam(new Ram())
        .addHdd(new Hdd())
        .getValue();

    expect(pc.parts[0].name).toBe('CPU');
    expect(pc.parts[1].name).toBe('GPU');
    expect(pc.parts[2].name).toBe('RAM');
    expect(pc.parts[3].name).toBe('HDD');
});
