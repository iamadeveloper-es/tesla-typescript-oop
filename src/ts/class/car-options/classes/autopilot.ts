import { AutoPilotType } from "../../definitions";
import { AbstractAutoPilot } from "../interfaces/options-interfaces";

export class CarAutoPilot implements AbstractAutoPilot{
    autoPilotOpts: Array<AutoPilotType>
    autoPilotCost: number

    setAutoPilotOpts(optionss: Array<AutoPilotType>): Array<AutoPilotType>{
        return this.autoPilotOpts = optionss
    }
    setAutoPilotCost(option: AutoPilotType): number{
        switch (option) {
            case true:
                return this.autoPilotCost = 7500
                break;
            default:
                return this.autoPilotCost = 0
                break;
        }
    }
}