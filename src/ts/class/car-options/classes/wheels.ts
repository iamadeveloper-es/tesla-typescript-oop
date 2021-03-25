import { WheelsType } from "../../definitions";
import { AbstractWheels } from "../interfaces/options-interfaces";

export class CarWheels implements AbstractWheels{
    wheelsOpts: Array<WheelsType>
    wheelsCost: number

    setWheelsOpts(wheels: WheelsType[]): WheelsType[] {
        return this.wheelsOpts = wheels
    }
    setWheelsCot(option: WheelsType): number {
        switch (option) {
            case 'Sport de 19':
                return this.wheelsCost = 1600
                break;
            case 'Arachnid de 21':
                return this.wheelsCost = 4800
                break;
            case 'Turbine de 22':
                return this.wheelsCost = 5900
                break;
            case 'Induction de 20':
                return this.wheelsCost = 2100
                break;         
            default:
                return this.wheelsCost = 0
                break;
        }
    }
}

/* export enum WheelsType{
    Aero18 = 'Aero de 18"',
    Sport19 = 'Sport de 19"',
    Tempest19 = 'Tempest de 19"',
    Arachnid21 = 'Arachnid de 21"',
    CyberStream20 = 'Cyberstream de 20"',
    Turbine22 = 'Turbine de 22"',
    Gemini19 = 'Gemini de 19"',
    Induction20 = 'Induction de 20"'
} */