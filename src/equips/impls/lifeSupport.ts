import { Equip } from "../equip";

export class LifeSupport extends Equip implements Support {
    support(): void {
        throw new Error("Method not implemented.");
    }

}