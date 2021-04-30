import {faster, Pokemon_old} from "../pokemon_old";

test("Pokemon_old a is faster than b", () => {
    const PokeA = new Pokemon_old("a", 25);
    const PokeB = new Pokemon_old("b", 15);
    expect(faster(PokeA, PokeB)).toBe(PokeA);
});

test("Pokemon_old b is faster than a", () => {
    const PokeA = new Pokemon_old("a", 75);
    const PokeB = new Pokemon_old("b", 100);
    expect(faster(PokeA, PokeB)).toBe(PokeB);
});

test("Pokemon_old a is faster than b, because a fight first", () => {
    const PokeA = new Pokemon_old("a", 30);
    const PokeB = new Pokemon_old("b", 30);
    expect(faster(PokeA, PokeB)).toBe(PokeA);
});