import { Equip } from "../equip";
import { Weapon } from "../weapon";

export class Trhowable extends Equip implements Weapon{
    use() {
        this.attack();
    }
    attack(): void {
        throw new Error("Method not implemented.");
    }
}