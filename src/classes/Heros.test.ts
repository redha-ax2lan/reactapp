import Heros from "./Heros";

it('constructor Heros', () =>{
    expect(new Heros().getDef).toBeGreaterThanOrEqual(1);
    expect(new Heros().getMaxHp).toBeGreaterThan(2);
});