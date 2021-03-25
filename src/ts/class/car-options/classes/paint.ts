import { PaintType } from "../../definitions";
import {AbstractPaint} from '../interfaces/options-interfaces'

export class CarPaint implements AbstractPaint{
    paintOpts: Array<PaintType>;
    paintCost: number

    setPaintOpts(options: Array<PaintType>): Array<PaintType> {
        return this.paintOpts = options
    }
    setPaintCost(option: PaintType): number {
        switch (option) {
            case PaintType.Black:
                return this.paintCost = 1050
                break;
            case PaintType.Blue:
                return this.paintCost = 1050
                break;
            case PaintType.Red:
                return this.paintCost = 2100
                break;
            default:
                return this.paintCost = 0
                break;
        }
    }

}