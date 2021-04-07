import {faster, Pokemon} from "../pokemon";

test("Pokemon a is faster than b", () => {
    const PokeA = new Pokemon("a", 25);
    const PokeB = new Pokemon("b", 15);
    expect(faster(PokeA, PokeB)).toBe(PokeA);
});

test("Pokemon b is faster than a", () => {
    const PokeA = new Pokemon("a", 75);
    const PokeB = new Pokemon("b", 100);
    expect(faster(PokeA, PokeB)).toBe(PokeB);
});

test("Pokemon a is faster than b, because a fight first", () => {
    const PokeA = new Pokemon("a", 30);
    const PokeB = new Pokemon("b", 30);
    expect(faster(PokeA, PokeB)).toBe(PokeA);
});