
export class Pokemon {
    name: string;
    speed: number;

    constructor(name: string, speed: number){
        this.name = name;
        this.speed = speed;
    }
}

export function faster(p1: Pokemon, p2: Pokemon) {
    if (p1.speed > p2.speed || p1.speed === p2.speed){
        return p1;
    }
    return p2;
}