import { PersonalComputerBuilder } from './PersonalComputerBuilder';
import { PersonalComputer } from './PersonalComputer';
import { Cpu } from './Cpu';
import { Gpu } from './Gpu';
import { Ram } from './Ram';
import { Hdd } from './Hdd';

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
