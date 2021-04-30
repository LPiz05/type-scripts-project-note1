import {IPokemon, Pokemon} from "../controllers";

describe('Fight between two Pokemon',() => {
    let PokeA: Pokemon;
    let PokeB: Pokemon;
    let PokeC: Pokemon;

    beforeEach(() => {
        PokeA = new Pokemon({
            name: "Letaligon",
            hp: 100,
            level: 2,
            base_power: 1,
            offensive_stat: 134,
            defensive_stat: 115
        })

        PokeB = new Pokemon({
            name: "Polaryu",
            hp: 85,
            level: 2,
            base_power: 1,
            offensive_stat: 75,
            defensive_stat: 90
        })

        PokeC = new Pokemon({
            name: "Scorplack",
            hp: 65,
            level: 2,
            base_power: 1,
            offensive_stat: 100,
            defensive_stat: 50
        })
    })

    it("Pokemon A is the winner", async() => {
        expect(await PokeA.fight(PokeB)).toBe(PokeA);
    });

    test("Pokemon B is the winner", async() => {
        expect(await PokeA.fight(PokeC)).toBe(PokeC);
    });

})