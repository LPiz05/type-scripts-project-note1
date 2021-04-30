import {faster, Pokemon_old} from "../pokemon_old";

test("Pokemon_old a is faster than b", () => {
    const PokeA = new Pokemon_old("a",80,25,10);
    const PokeB = new Pokemon_old("b",80,15,10);
    expect(faster(PokeA, PokeB)).toBe(PokeA);
});

test("Pokemon_old b is faster than a", () => {
    const PokeA = new Pokemon_old("a",80,75,10);
    const PokeB = new Pokemon_old("b",80,100,10);
    expect(faster(PokeA, PokeB)).toBe(PokeB);
});

test("Pokemon_old a is faster than b, because a fight first", () => {
    const PokeA = new Pokemon_old("a",80,30,10);
    const PokeB = new Pokemon_old("b",80,30,10);
    expect(faster(PokeA, PokeB)).toBe(PokeA);
});