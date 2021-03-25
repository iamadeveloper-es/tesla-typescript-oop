import '../scss/style.scss';
import { Model3 } from './class/car-models/model3';
import { ModelS } from './class/car-models/models';
import { ModelX } from './class/car-models/modelx';
import { ModelY } from './class/car-models/modely';
import { CarDirector } from './class/car/car-director';

import { ProductTemplate } from './class/productTemplate';
import { stringFormat } from './helpers/helpers';

const app = document.getElementById('app')!

let model3 = new CarDirector(new Model3())
let modelS = new CarDirector(new ModelS())
let modelX = new CarDirector(new ModelX())
let modelY = new CarDirector(new ModelY())

model3.build()
modelS.build()
modelX.build()
modelY.build()

let model3Template = new ProductTemplate(model3.getCar())
let modelSTemplate = new ProductTemplate(modelS.getCar())
let modelXTemplate = new ProductTemplate(modelX.getCar())
let modelYTemplate = new ProductTemplate(modelY.getCar())

model3Template.renderHTML(app)
modelSTemplate.renderHTML(app)
modelXTemplate.renderHTML(app)
modelYTemplate.renderHTML(app)

model3Template.renderPaintOptions()
modelSTemplate.renderPaintOptions()
modelXTemplate.renderPaintOptions()
modelYTemplate.renderPaintOptions()

model3Template.renderAutoPilotOptions()
modelSTemplate.renderAutoPilotOptions()
modelXTemplate.renderAutoPilotOptions()
modelYTemplate.renderAutoPilotOptions()

const btnCustomArr = document.querySelectorAll('.btn_custom') as NodeListOf<HTMLButtonElement>
const customMenu = document.querySelectorAll('.car-custom-menu') as NodeListOf<HTMLDivElement>

const model3PaintOptions = document.querySelectorAll('.model3 .paint-options .li-option') as NodeListOf<HTMLLIElement>
const modelSPaintOptions = document.querySelectorAll('.models .paint-options .li-option') as NodeListOf<HTMLLIElement>
const modelXPaintOptions = document.querySelectorAll('.modelx .paint-options .li-option') as NodeListOf<HTMLLIElement>
const modelYPaintOptions = document.querySelectorAll('.modely .paint-options .li-option') as NodeListOf<HTMLLIElement>

const model3WheelsOptions = document.querySelectorAll('.model3 .wheels-options .li-option') as NodeListOf<HTMLLIElement>
const modelSWheelsOptions = document.querySelectorAll('.models .wheels-options .li-option') as NodeListOf<HTMLLIElement>
const modelXWheelsOptions = document.querySelectorAll('.modelx .wheels-options .li-option') as NodeListOf<HTMLLIElement>
const modelYWheelsOptions = document.querySelectorAll('.modely .wheels-options .li-option') as NodeListOf<HTMLLIElement>

const model3InteriorOptions = document.querySelectorAll('.model3 .interior-options .li-option') as NodeListOf<HTMLLIElement>
const modelSInteriorOptions = document.querySelectorAll('.models .interior-options .li-option') as NodeListOf<HTMLLIElement>
const modelXInteriorOptions = document.querySelectorAll('.modelx .interior-options .li-option') as NodeListOf<HTMLLIElement>
const modelYInteriorOptions = document.querySelectorAll('.modely .interior-options .li-option') as NodeListOf<HTMLLIElement>

const model3AutoPilotOptions = document.querySelectorAll('.model3 .auto-pilot-options .li-option') as NodeListOf<HTMLLIElement>
const modelSAutoPilotOptions = document.querySelectorAll('.models .auto-pilot-options .li-option') as NodeListOf<HTMLLIElement>
const modelXAutoPilotOptions = document.querySelectorAll('.modelx .auto-pilot-options .li-option') as NodeListOf<HTMLLIElement>
const modelYAutoPilotOptions = document.querySelectorAll('.modely .auto-pilot-options .li-option') as NodeListOf<HTMLLIElement>

model3Template.chosePaintOptions(model3PaintOptions, model3.getCar())
modelSTemplate.chosePaintOptions(modelSPaintOptions, modelS.getCar())
modelXTemplate.chosePaintOptions(modelXPaintOptions, modelX.getCar())
modelYTemplate.chosePaintOptions(modelYPaintOptions, modelY.getCar())

model3Template.choseWheelsOptions(model3WheelsOptions, model3.getCar())
modelSTemplate.choseWheelsOptions(modelSWheelsOptions, modelS.getCar())
model3Template.choseWheelsOptions(modelXWheelsOptions, modelX.getCar())
model3Template.choseWheelsOptions(modelYWheelsOptions, modelY.getCar())

model3Template.choseInteriorOptions(model3InteriorOptions, model3.getCar())
modelSTemplate.choseInteriorOptions(modelSInteriorOptions, modelS.getCar())
model3Template.choseInteriorOptions(modelXInteriorOptions, modelX.getCar())
model3Template.choseInteriorOptions(modelYInteriorOptions, modelY.getCar())

model3Template.choseAutoPilotOptions(model3AutoPilotOptions, model3.getCar())
modelSTemplate.choseAutoPilotOptions(modelSAutoPilotOptions, modelS.getCar())
model3Template.choseAutoPilotOptions(modelXAutoPilotOptions, modelX.getCar())
model3Template.choseAutoPilotOptions(modelYAutoPilotOptions, modelY.getCar())


btnCustomArr.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(btn, index)
        customMenu[index].classList.toggle('show')
        customMenu[index].scrollIntoView({
            behavior: 'smooth'
        });
    })
})





