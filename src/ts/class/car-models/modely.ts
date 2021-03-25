import {CarBuilder} from '../car/car-builder'
import {Car } from "../car/car-plan"
import { PaintType, WheelsType, InteriorType } from "../definitions"

export class ModelY implements CarBuilder{

    car: Car

    constructor(){
        this.car = new Car()
    }
    buildModel(){
        this.car.setModel('Model Y')
    }
    buildCost() {
        this.car.setCost(64000)
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
        this.car.setWheelsOpts([WheelsType.Gemini19, WheelsType.Induction20])
    }
    buildWheelsDefault(){
        this.car.setWheelsDefault(WheelsType.Gemini19)
    }
    buildWheelsCost(){
        this.car.getWheelsCost()
    }
    buildInteriorOpts() {
        this.car.setInteriorOptions([InteriorType.Black, InteriorType.White])
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
        this.car.setSpeed(5.1)
    }
    buildMaxSpeed(){
        this.car.setMaxSpeed(217)
    }
    buildRange(){
        this.car.setRange(505)
    }
    buildMotorType(){
        this.car.setMotorType('AWD')
    }
    buildImages() {
        this.car.setImages(['/build/images/modely_white.jpeg', '/build/images/modely_white_2.jpeg'])
    }
    buildTotalCost(){
        return this.car.setTotalCost(
            this.car.getPaintCost(), 
            this.car.getWheelsCost(), 
            this.car.getInteriorCost(), 
            this.car.getAutoPilotCost()
            )
    }
    getCar(): Car {
        return this.car
    }

}