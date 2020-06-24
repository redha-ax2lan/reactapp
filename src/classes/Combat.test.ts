import Combat from './Combat'

it('constructor Arme', () => {
    //expect(new Comb().getMinAtk).toBeLessThan(11);
    //expect(new Arme().getMinAtk).toBeGreaterThan(0);
    //expect(new Arme().getMaxAtk).toBeLessThan(21);
    //expect(new Arme().getMaxAtk).toBeGreaterThan(0)
    //expect(new Arme().getCritChance).toBeLessThan(21)
    //expect(new Arme().getCritChance).toBeGreaterThan(0)

    expect(new Combat().getTourN).toEqual(1);
})