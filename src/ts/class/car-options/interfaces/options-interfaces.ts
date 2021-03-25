import { PaintType, WheelsType, InteriorType, AutoPilotType } from "../../definitions";

export interface AbstractPaint{
    setPaintOpts(options: Array<PaintType>): Array<PaintType>
    setPaintCost(option: PaintType): number
}

export interface AbstractWheels{
    setWheelsOpts(wheels: Array<WheelsType>): Array<WheelsType>
    setWheelsCot(option: WheelsType): number
}

export interface AbstractInterior{
    setInteriorOpts(options: Array<InteriorType>): Array<InteriorType>
    setInteriorCost(option: InteriorType): number
}

export interface AbstractAutoPilot{
    setAutoPilotOpts(options: Array<AutoPilotType>): Array<AutoPilotType>
    setAutoPilotCost(option: AutoPilotType): number
}

export interface AbstractSpecs{
    setSpeed(speed: number): number
    setMaxSpeed(speed: number): void
    setRange(range: number): number
    setMotorType(mType: string): string
    getSpeed(): number
    getMaxSpeed(): number
    getRange(): number
    getMotorType(): string
}