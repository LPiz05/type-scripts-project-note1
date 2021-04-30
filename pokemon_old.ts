
export class Pokemon_old {
    name: string;
    health: number;
    speed: number;
    attack: number;

    constructor(name: string, health: number, speed: number, attack: number){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.attack = attack;
    }
}

export function faster(p1: Pokemon_old, p2: Pokemon_old) {
    if (p1.speed > p2.speed || p1.speed === p2.speed){
        return p1;
    }
    return p2;
}

export function damage(p1: Pokemon_old, p2: Pokemon_old) {
    if (p2.health > p1.attack) {
        p2.health = p2.health - p1.attack;
    } else {
        p2.health = 0;
        return `${p2.name} is dead`;
    }

}