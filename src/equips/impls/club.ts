import { Equip } from "../equip";
import { Weapon } from "../weapon";

export class Club extends Equip implements Weapon {
    attack(): void {
        throw new Error("Method not implemented.");
    }

}