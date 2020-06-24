import Combat from './Partie'
import Partie from './Partie'

it('constructor Arme', () => {
    expect(new Partie().getEquipe).toBeDefined();
    expect(new Partie().getMonstres).toBeDefined();
    expect(new Partie().getNom).toBeDefined();
    expect(new Partie().getHeros).toBeDefined();
})