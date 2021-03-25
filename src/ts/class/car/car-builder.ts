import { Car } from "./car-plan";

export interface CarBuilder{
    buildModel()
    buildCost()
    buildTotalCost()
    buildPaintOpts()
    buildPaintDefault()
    buildPaintCost()
    buildWheelsOpts()
    buildWheelsDefault()
    buildWheelsCost()
    buildInteriorOpts()
    buildInteriorDefault()
    buildInteriorCost()
    buildAutoPilotOpts()
    buildAutoPilotDefault()
    buildAutoPilotCost()
    buildSpeed()
    buildMaxSpeed()
    buildRange()
    buildMotorType()
    buildImages()
    getCar(): Car
}