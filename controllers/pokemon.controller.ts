const chalk = require('chalk');

export interface IPokemon {
    name: string;
    hp: number
    level: number;
    base_power: number;
    offensive_stat: number;
    defensive_stat: number;
}

export class Pokemon {
    name: string;
    hp: number
    level: number;
    base_power: number;
    offensive_stat: number;
    defensive_stat: number;

    constructor(props:IPokemon){
        this.name = props.name;
        this.hp = props.hp;
        this.level = props.level;
        this.base_power = props.base_power;
        this.offensive_stat = props.offensive_stat;
        this.defensive_stat = props.defensive_stat;
    }

    public attack(adversary: Pokemon): number {
        let damage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.offensive_stat * this.base_power / this.defensive_stat) / 50) + 2;
        return adversary.hp -= damage;
    }

    public fight(adversary: Pokemon): Promise<Pokemon> {
        return new Promise<Pokemon>(async (resolve, reject) => {
            let i = 0;
            let myTime;
            while (this.hp > 0 && adversary.hp > 0) {
                if (i % 2 == 0) {
                    myTime = await setTimeout(() => adversary.hp = this.attack(adversary), 1000);
                    // await myTime;
                    console.log(chalk.red(this.name + " pv: " + this.hp + " attack " + adversary.name + " pv " + adversary.hp));
                    if (adversary.hp <= 0 || this.hp <= 0) clearTimeout(myTime);
                    i++;
                } else {
                    myTime = await setTimeout(() => this.hp = adversary.attack(this), 1000);
                    console.log(chalk.blue(this.name + " pv: " + this.hp + " attack " + adversary.name + " pv " + adversary.hp));
                    if (adversary.hp <= 0 || this.hp <= 0) clearTimeout(myTime);
                    i++;
                }
            }
            if(this.hp <= 0)
                resolve(adversary);
            else
                resolve(this);
        })
    }
}