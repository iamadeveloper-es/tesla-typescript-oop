import { Car } from "../class/car/car-plan"

export const stringFormat = (str: string): string => {
    return str.toLowerCase().replace(/\s/g, '')
}

export const setCost = (model: Car) => {
    model.setTotalCost(model.getPaintCost(), model.getWheelsCost(), model.getInteriorCost(), model.getAutoPilotCost())
    
}

