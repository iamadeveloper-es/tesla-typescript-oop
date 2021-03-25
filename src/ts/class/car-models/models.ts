import {CarBuilder} from '../car/car-builder'
import { Car } from "../car/car-plan"
import { PaintType, WheelsType, InteriorType } from "../definitions"

export class ModelS implements CarBuilder{

    car: Car

    constructor(){
        this.car = new Car()
    }
    buildModel(){
        this.car.setModel('Model S')
    }
    buildCost() {
        this.car.setCost(89990)
    }
    buildTotalCost(){
        return this.car.setTotalCost(
            this.car.getPaintCost(), 
            this.car.getWheelsCost(), 
            this.car.getInteriorCost(), 
            this.car.getAutoPilotCost()
            )
    }
    buildPaintOpts() {
        this.car.setPaintOpts([PaintType.White, PaintType.Black, PaintType.Blue, PaintType.Red])
    }
    buildPaintDefault() {
        this.car.setPaintDefault(PaintType.White)
    }
    buildPaintCost(){
        this.car.getPaintCost()
    }
    buildWheelsOpts(){
        this.car.setWheelsOpts([WheelsType.Tempest19, WheelsType.Arachnid21])
    }
    buildWheelsDefault(){
        this.car.setWheelsDefault(WheelsType.Tempest19)
    }
    buildWheelsCost(){
        this.car.getWheelsCost()
    }
    buildInteriorOpts() {
        this.car.setInteriorOptions([InteriorType.Black, InteriorType.White, InteriorType.Cream])
    }
    buildInteriorDefault() {
        this.car.setInteriorDefault(InteriorType.Black)
    }
    buildInteriorCost(){
        this.car.getInteriorCost()
    }
    buildAutoPilotOpts(){
        this.car.setAutoPilotOpts([false,true])
    }
    buildAutoPilotDefault(){
        this.car.setAutoPilotDefault(false)
    }
    buildAutoPilotCost(){
        this.car.getAutoPilotCost()
    }
    buildSpeed(){
        this.car.setSpeed(2.1)
    }
    buildMaxSpeed(){
        this.car.setMaxSpeed(250)
    }
    buildRange(){
        this.car.setRange(663)
    }
    buildMotorType(){
        this.car.setMotorType('AWD')
    }
    buildImages() {
        this.car.setImages(['images/models_white.jpeg', 'images/models_white_2.jpeg'])
    }
    getCar(): Car {
        return this.car
    }

}