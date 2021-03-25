import {CarBuilder} from '../car/car-builder'
import {Car } from "../car/car-plan"
import { PaintType, WheelsType, InteriorType } from "../definitions"

export class Model3 implements CarBuilder{

    car: Car

    constructor(){
        this.car = new Car()
    }
    buildModel(){
        this.car.setModel('Model 3')
    }
    buildCost() {
        this.car.setCost(49000)
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
        this.car.setWheelsOpts([WheelsType.Aero18, WheelsType.Sport19])
    }
    buildWheelsDefault(){
        this.car.setWheelsDefault(WheelsType.Aero18)
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
        this.car.setSpeed(3.3)
    }
    buildMaxSpeed(){
        this.car.setMaxSpeed(225)
    }
    buildRange(){
        this.car.setRange(580)
    }
    buildMotorType(){
        this.car.setMotorType('AWD')
    }
    buildImages() {
        this.car.setImages(['/build/images/model3_white.jpeg', '/build/images/model3_white_2.jpeg'])
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