import Epee from "./Epee";

it('constructor Epee', () =>{
    expect(new Epee().getCritChance).toBeLessThan(42);
    expect(new Epee().getCritChance).toBeGreaterThan(2);
    expect(new Epee().getMinAtk).toBeLessThan(11);
    expect(new Epee().getMinAtk).toBeGreaterThan(0);
    expect(new Epee().getMaxAtk).toBeLessThan(21);
    expect(new Epee().getMaxAtk).toBeGreaterThan(0);
});
