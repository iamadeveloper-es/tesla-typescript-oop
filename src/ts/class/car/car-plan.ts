
import { CarAutoPilot } from "../car-options/classes/autopilot";
import { CarInterior } from "../car-options/classes/interior";
import { CarPaint } from "../car-options/classes/paint";
import { CarSpecs } from "../car-options/classes/specs";
import { CarWheels } from "../car-options/classes/wheels";
import { AutoPilotType, InteriorType, PaintType, WheelsType } from "../definitions";

export interface CarPlan{
    setModel(model: string)
    setCost(cost: number)
    setTotalCost(paintCost: number, wheels: number, interiorCost: number, autoPilot: number): number
    setPaintOpts(opts: Array<PaintType>): Array<PaintType>
    setPaintDefault(opt: PaintType): PaintType
    setWheelsOpts(opts: Array<WheelsType>): Array<WheelsType>
    setWheelsDefault(opt: WheelsType): WheelsType
    setInteriorOptions(opts: Array<InteriorType>): Array<InteriorType>
    setInteriorDefault(opt: InteriorType)
    setAutoPilotOpts(opts: Array<AutoPilotType>): Array<AutoPilotType>
    setAutoPilotDefault(opt: AutoPilotType): AutoPilotType
    setSpeed(speed: number): number
    setMaxSpeed(speed: number): void
    setRange(range: number): number
    setMotorType(mType: string): string
    setImages(images: Array<string>)
    getPaintCost(): number
    
}


export class Car implements CarPlan{
    private model: string
    private cost: number
    totalCost: number
    private paintOpts: CarPaint
    private paintDefault: PaintType
    private interiorOpts: CarInterior
    private interiorDefault: InteriorType
    private wheelsOpts: CarWheels
    private wheelsDefault: WheelsType
    private autoPilotopts: CarAutoPilot
    private AutoPilotDefault: AutoPilotType
    private carSpecs: CarSpecs
    private images: Array<string>

    constructor(){
        this.paintOpts = new CarPaint()
        this.wheelsOpts = new CarWheels()
        this.interiorOpts = new CarInterior()
        this.autoPilotopts = new CarAutoPilot()
        this.carSpecs = new CarSpecs()
    }
    setModel(model: string){
        this.model = model
    }
    getModel(): string{
        return this.model
    }
    setCost(cost: number){
        return this.cost = cost
    }
    getCost(){
        return this.cost
    }
    setTotalCost(paintCost: number, wheels: number, interiorCost: number, autoPilot: number): number{
        this.totalCost =  this.getCost() + paintCost + wheels+ interiorCost + autoPilot
        return this.totalCost
    }
    setPaintOpts(opts: Array<PaintType>): Array<PaintType>{
        return this.paintOpts.setPaintOpts(opts)
    }
    getPaintOpts(): Array<PaintType>{
        return this.paintOpts.paintOpts
    }
    setPaintDefault(opt: PaintType): PaintType{
        return this.paintDefault = opt
    }
    getPaintDefault(): PaintType{
        return this.paintDefault
    }
    getPaintCost(): number{
        return this.paintOpts.setPaintCost(this.paintDefault)
    }
    setWheelsOpts(opts: Array<WheelsType>): Array<WheelsType>{
        return this.wheelsOpts.setWheelsOpts(opts)
    }
    getWheelsOpt(): Array<WheelsType>{
        return this.wheelsOpts.wheelsOpts
    }
    setWheelsDefault(opt: WheelsType): WheelsType{
        return this.wheelsDefault = opt
    }
    getWheelsDefault(): WheelsType{
        return this.wheelsDefault
    }
    getWheelsCost(): number{
        return this.wheelsOpts.setWheelsCot(this.wheelsDefault)
    }
    setInteriorOptions(opts: Array<InteriorType>){
        return this.interiorOpts.setInteriorOpts(opts)
    }
    setInteriorDefault(interior: InteriorType){
        return this.interiorDefault = interior
    }
    getInteriorDefault(): InteriorType{
        return this.interiorDefault
    }
    getInteriorOpts(): Array<InteriorType>{
        return this.interiorOpts.interiorOpts
    }
    getInteriorCost(): number{
        return this.interiorOpts.setInteriorCost(this.interiorDefault)
    }
    setAutoPilotOpts(opts: Array<AutoPilotType>): Array<AutoPilotType>{
        return this.autoPilotopts.setAutoPilotOpts(opts)
    }
    getAutoPilotOpts(): Array<AutoPilotType>{
        return this.autoPilotopts.autoPilotOpts
    }
    setAutoPilotDefault(opt: AutoPilotType): AutoPilotType{
        return this.AutoPilotDefault = opt
    }
    getAutoPilotDefault(): AutoPilotType{
        return this.AutoPilotDefault
    }
    getAutoPilotCost(): number{
        return this.autoPilotopts.setAutoPilotCost(this.AutoPilotDefault)
    }
    setSpeed(speed: number): number{
        return this.carSpecs.setSpeed(speed)
    }
    getSpeed(): number{
        return this.carSpecs.getSpeed()
    }
    setMaxSpeed(speed: number): void{
        return this.carSpecs.setMaxSpeed(speed)
    }
    getMaxSpeed(): number{
        return this.carSpecs.getMaxSpeed()
    }
    setRange(range: number): number{
        return this.carSpecs.setRange(range)
    }
    getRange(): number{
        return this.carSpecs.getRange()
    }
    setMotorType(mType: string): string{
        return this.carSpecs.setMotorType(mType)
    }
    getMotorType(): string{
        return this.carSpecs.getMotorType()
    }
    setImages(images: Array<string>): Array<string>{
        return this.images = images
    }
    getImages(): Array<string>{
        return this.images
    }
    
}




