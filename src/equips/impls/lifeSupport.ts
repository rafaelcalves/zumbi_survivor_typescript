import { Equip } from "../equip";
import { Support } from "../support";

export class LifeSupport extends Equip implements Support {
    use(): void {
        this.support();
    }

    support(): void {
        //aumenta a vida
        throw new Error("Method not implemented.");
    }
}