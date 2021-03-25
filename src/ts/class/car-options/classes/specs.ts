import { AbstractSpecs } from "../interfaces/options-interfaces"

export class CarSpecs implements AbstractSpecs{
    private speed: number
    private maxSpeed: number
    private range: number
    private motorType: string

    setSpeed(speed: number): number {
        return this.speed = speed
    }
    setMaxSpeed(speed: number): void{
        this.maxSpeed = speed
    }
    setRange(range: number): number {
        return this.range = range
    }
    setMotorType(mType: string): string {
        return this.motorType = mType
    }
    getSpeed(): number {
        return this.speed
    }
    getMaxSpeed(): number{
        return this.maxSpeed
    }
    getRange(): number {
        return this.range
    }
    getMotorType(): string {
        return this.motorType
    }
    
}