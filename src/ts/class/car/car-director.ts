import { CarBuilder } from "./car-builder"
import { Car } from "./car-plan"

export class CarDirector{
    car: CarBuilder


    constructor(car: CarBuilder){
        this.car = car
    }
    getCar(): Car{
        return this.car.getCar()
    }

    build(){
        this.car.buildModel()
        this.car.buildCost()
        this.car.buildTotalCost()
        this.car.buildPaintOpts()
        this.car.buildPaintDefault()
        this.car.buildPaintCost()
        this.car.buildWheelsOpts()
        this.car.buildWheelsDefault()
        this.car.buildWheelsCost()
        this.car.buildInteriorOpts()
        this.car.buildInteriorDefault()
        this.car.buildInteriorCost()
        this.car.buildAutoPilotOpts()
        this.car.buildInteriorDefault()
        this.car.buildAutoPilotCost()
        this.car.buildSpeed()
        this.car.buildMaxSpeed()
        this.car.buildRange()
        this.car.buildMotorType()
        this.car.buildImages()
    }
}
