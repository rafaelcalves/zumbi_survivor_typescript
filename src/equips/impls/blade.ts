import { Equip } from "../equip";
import { Weapon } from "../weapon";

export class Blade extends Equip implements Weapon{
    use(): void {
        this.attack();
    }

    attack(): void {
        throw new Error("Method not implemented.");
    }
}