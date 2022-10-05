import { Queue } from "./collections/impls/queue";
import { Equip } from "./equips/equip";
import { Level } from "./level";

export class Survivor {
    protected name: string;
    protected wounds: number;
    protected actions: number;
    protected equips: Queue<Equip>;
    protected experience: number;
    protected level: Level;

    constructor(name: string) {
        this.name = name;
        this.wounds = 0;
        this.actions = 3;
        this.equips = new Queue(5);
        this.experience = 0;
        this.level = Level.Blue;
    }
    
    kill(){
        this.experience++;
        this.levelUp();
    }

    private levelUp() {

    }

    getLevel():Level{
        return this.level;
    }

    getHurt(): void {
        this.wounds++;
        this.equips.reduceCapacity();
    }

    isAlive(): boolean {
        return this.wounds < 2;
    }

    executeAction(): void {
        if (!this.hasActions())
            throw new Error("No actions available")

        // action happens here

        this.actions--;
        if (this.actions < 0)
            this.actions = 0;
    }

    hasActions(): boolean {
        return this.actions > 0 && this.isAlive();
    }

    pickUp(equip: Equip) {
        if (!this.equips.isFull())
            this.equips.enqueue(equip);
    }

    getName():string{
        return this.name;
    }

    equals(survivor:Survivor){
        if(survivor === undefined)
            return false;
        return survivor.getName() === this.name;
    }
}