import Masse from "./Masse";

it('constructor Masse', () =>{
    expect(new Masse().getCritChance).toBeLessThan(21);
    expect(new Masse().getCritChance).toBeGreaterThan(0);
    expect(new Masse().getMinAtk).toBeLessThan(16.5);
    expect(new Masse().getMinAtk).toBeGreaterThan(0);
    expect(new Masse().getMaxAtk).toBeLessThan(31.5);
    expect(new Masse().getMaxAtk).toBeGreaterThan(0);
});