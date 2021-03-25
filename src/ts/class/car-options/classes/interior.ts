import { InteriorType } from "../../definitions";
import { AbstractInterior } from "../interfaces/options-interfaces";

export class CarInterior implements AbstractInterior{
    interiorOpts: Array<InteriorType>
    interiorCost: number

    setInteriorOpts(options: Array<InteriorType>): Array<InteriorType> {
        return this.interiorOpts = options
    }
    setInteriorCost(option: InteriorType): number {
        switch (option) {
            case InteriorType.White:
                return this.interiorCost = 1050
                break;
            case InteriorType.Cream:
                return this.interiorCost = 2100
                break;
            default:
                return this.interiorCost = 0
                break;
        }
    }
    
}