import {CarBuilder} from '../car/car-builder'
import {Car } from "../car/car-plan"
import { PaintType, WheelsType, InteriorType } from "../definitions"

export class ModelX implements CarBuilder{

    car: Car

    constructor(){
        this.car = new Car()
    }
    buildModel(){
        this.car.setModel('Model X')
    }
    buildCost() {
        this.car.setCost(99990)
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
        this.car.setWheelsOpts([WheelsType.CyberStream20, WheelsType.Turbine22])
    }
    buildWheelsDefault(){
        this.car.setWheelsDefault(WheelsType.CyberStream20)
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
        this.car.setSpeed(3.9)
    }
    buildMaxSpeed(){
        this.car.setMaxSpeed(250)
    }
    buildRange(){
        this.car.setRange(580)
    }
    buildMotorType(){
        this.car.setMotorType('AWD')
    }
    buildImages() {
        this.car.setImages(['/build/images/modelx_white.jpeg', '/build/images/modelx_white_2.jpeg'])
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