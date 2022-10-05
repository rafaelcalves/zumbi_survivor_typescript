import { Equip } from "../equip";
import { Support } from "../support";

export class LifeSupport extends Equip implements Support {
    support(): void {
        throw new Error("Method not implemented.");
    }
}