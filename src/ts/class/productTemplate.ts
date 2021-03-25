import { setCost, stringFormat } from "../helpers/helpers"
import { Car } from "./car/car-plan"
import { InteriorType, PaintType, WheelsType } from "./definitions"


export class ProductTemplate {
    car: Car

    constructor(car: Car) {
        this.car = car
    }


    renderHTML(node: Element): Element {
        const carContainer = document.createElement('div')
        carContainer.setAttribute('class', 'car-container ' + stringFormat(this.car.getModel().toLowerCase()))
        carContainer.innerHTML =
            `
                                <div class="car-title">
                                    <h2>${this.car.getModel()}</h2>
                                </div>
                                <div class="car-image">
                                    <img class="fluid" src="${this.car.getImages()[0]}" alt="Tesla ${this.car.getModel()}">
                                </div>
                                <div class="car-info d-flex flex-center flex-v-center">
                                    <div class="info speed">
                                        <span class="output">${this.car.getSpeed()} <small>s</small></span>
                                        <span>0-100 km/h</span>
                                    </div>
                                    <div class="info range">
                                        <span class="output">${this.car.getRange()}<small>km</small></span>
                                        <span>Autonomía</span>
                                    </div>
                                    <div class="info motor">
                                        <span class="output">${this.car.getMaxSpeed()}<small>km/h</small></span>
                                        <span>Velocidad máxima</span>
                                    </div>
                                    <div class="info motor">
                                        <span class="output">${this.car.getMotorType()}</span>
                                        <span>Motor</span>
                                    </div>
                                </div>
                                <div class="car-buttons d-flex flex-center flex-v-center">
                                    <button class="btn_custom btn btn-grey">Customizar</button>
                                </div>
                                <div class="car-custom-menu hide">
                                    <div class="flex-container">
                                        <div class="flex-item">
                                            <h3>Customizar<br> <span>${this.car.getModel()}</span></h3>
                                            <div class="car-info d-flex flex-v-center">
                                                <div class="info speed">
                                                    <span class="output">${this.car.getSpeed()}<small>s</small></span>
                                                    <span>0-100 km/h</span>
                                                </div>
                                                <div class="info range">
                                                    <span class="output">${this.car.getRange()}<small>km</small></span>
                                                    <span>Autonomía</span>
                                                </div>
                                                <div class="info motor">
                                                    <span class="output">${this.car.getMaxSpeed()}<small>km/h</small></span>
                                                    <span>Velocidad máxima</span>
                                                </div>
                                                <div class="info motor">
                                                    <span class="output">${this.car.getMotorType()}</span>
                                                    <span>Motor</span>
                                                </div>
                                            </div>
                                            <div class="car-image">
                                                <img id="${stringFormat(this.car.getModel().toLowerCase())}-custom-image" 
                                                     class="fluid" src="${this.car.getImages()[1]}" alt="Tesla ${this.car.getModel()}">
                                            </div>
                                            <div class="car-price">
                                                <span class="base">Precio: ${this.car.totalCost} €</span>
                                                
                                            </div>
                                        </div>
                                        <div class="flex-item">
                                            <div class="custom">
                                                <h4>Opciones</h4>
                                                <div class="paint">
                                                    <p class="lead">Pintura<p>
                                                    <div class="paint-options">
                                                        <ul></ul>
                                                    </div>
                                                </div>
                                                <div class="wheels">
                                                    <p class="lead">Llantas<p>
                                                    <div class="wheels-options">
                                                        <ul></ul>
                                                    </div>
                                                </div>
                                                <div class="interior">
                                                    <p class="lead">Interior<p>
                                                    <div class="interior-options">
                                                        <ul></ul>
                                                    </div>
                                                </div>
                                                <div class="self-driving">
                                                    <p class="lead">Auto Pilot<p>
                                                    <div class="auto-pilot-options">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
        node.appendChild(carContainer)
        return node;

    }
    toggleActive(model: string, optionName: string): void {
        const nodeOpts = document.querySelectorAll(`.${stringFormat(model.toLowerCase())} .${optionName}-options .option`)!
        nodeOpts.forEach(el => {
            el.addEventListener('click', () => {
                nodeOpts.forEach(ele => {
                    ele.classList.remove('active')
                })
                el.classList.add('active')
            })
        
        });
    }
    optionTemplate(typeOptions:Array<string> | Array<boolean>, defaultOpt: string, optinonName: string): Element{
        const ul = document.querySelector(`.${stringFormat(this.car.getModel())} .${optinonName}-options ul`)
        typeOptions.forEach(opt => {
            const li = document.createElement('li')
            li.setAttribute('class', `li-option ${stringFormat(opt.toLowerCase())}`)
            li.setAttribute('id', `${stringFormat(this.car.getModel())}-${optinonName}-${stringFormat(opt.toLowerCase())}`)
            const option = 
                        `
                        <span class="option"></span>
                        <span class="option-name">${opt}</span>
                        `
            li.innerHTML = option
            ul.appendChild(li);
            document.querySelectorAll(`#${stringFormat(this.car.getModel())}-${optinonName}-${defaultOpt} .option`).forEach(ele => {
                ele.classList.add('active')
            })
        })
        this.toggleActive(this.car.getModel(), optinonName)
        return ul
        
    }
    renderPaintOptions(): void{
            this.optionTemplate(this.car.getPaintOpts(), stringFormat(this.car.getPaintDefault().toLowerCase()), 'paint')
            this.optionTemplate(this.car.getWheelsOpt(), stringFormat(this.car.getWheelsDefault().toLowerCase()), 'wheels')
            this.optionTemplate(this.car.getInteriorOpts(), stringFormat(this.car.getInteriorDefault().toLowerCase()), 'interior')
            
    }
    renderAutoPilotOptions(): Element {
        const ul = document.querySelector(`.${stringFormat(this.car.getModel())}` + ' .auto-pilot-options')
        const autoPilotOptions = this.car.getAutoPilotOpts()

        autoPilotOptions.forEach(opt => {
            const li = document.createElement('div')
            li.setAttribute('class', `li-option ${opt}`)
            li.setAttribute('id', `${stringFormat(this.car.getModel())}-autopilot-${opt}`)
            const option = 
                        `
                        <span class="option"></span>
                        <span class="option-name">${opt}</span>
                        `
            li.innerHTML = option
            document.querySelectorAll(`#${stringFormat(this.car.getModel())}-autopilot-false .option`).forEach(ele => {
                ele.classList.add('active')
            });
            ul.appendChild(li)
            
        })
        this.toggleActive(this.car.getModel(), 'auto-pilot')
        
        return ul

        
    }
    chosePaintOptions(options: NodeListOf<HTMLLIElement>, model: Car){
        const HTMLPrice = document.querySelector(`.${stringFormat(model.getModel()).toString()} .car-price .base`) as HTMLSpanElement
        const image = document.querySelector(`.${stringFormat(model.getModel()).toString()} #${stringFormat(model.getModel()).toString()}-custom-image`) as HTMLImageElement
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                switch (opt.getAttribute('id')) {
                    case `${stringFormat(model.getModel()).toString()}-paint-black`:
                        model.setPaintDefault(PaintType.Black)
                        setCost(model)
                        image.src = `/build/images/${stringFormat(model.getModel()).toString()}_black_2.jpeg`
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-paint-blue`:
                        model.setPaintDefault(PaintType.Blue)
                        setCost(model)
                        image.src = `/build/images/${stringFormat(model.getModel()).toString()}_blue_2.jpeg`
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-paint-red`:
                        model.setPaintDefault(PaintType.Red)
                        setCost(model)
                        image.src = `/build/images/${stringFormat(model.getModel()).toString()}_red_2.jpeg`
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                
                    default:
                        model.setPaintDefault(PaintType.White)
                        setCost(model)
                        image.src = `/build/images/${stringFormat(model.getModel()).toString()}_white_2.jpeg`
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                }
                console.log(this.car)
                console.log(model)
            })
        })
    }
    choseWheelsOptions(options: NodeListOf<HTMLLIElement>, model: Car){
        const HTMLPrice = document.querySelector(`.${stringFormat(model.getModel()).toString()} .car-price .base`) as HTMLSpanElement
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                console.log(model)
                opt.classList.add('active')
                switch (opt.getAttribute('id')) {
                    case `${stringFormat(model.getModel()).toString()}-wheels-aerode18`:
                        model.setWheelsDefault(WheelsType.Aero18)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-wheels-sportde19`:
                        model.setWheelsDefault(WheelsType.Sport19)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-wheels-tempestde19`:
                        model.setWheelsDefault(WheelsType.Tempest19)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-wheels-arachnidde21`:
                        model.setWheelsDefault(WheelsType.Arachnid21)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-wheels-cyberstreamde20`:
                        model.setWheelsDefault(WheelsType.CyberStream20)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-wheels-turbinede22`:
                        model.setWheelsDefault(WheelsType.Turbine22)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-wheels-geminide19`:
                        model.setWheelsDefault(WheelsType.Gemini19)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-wheels-inductionde20`:
                        model.setWheelsDefault(WheelsType.Induction20)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                }
                
            })
        })
    }
    choseInteriorOptions(options: NodeListOf<HTMLLIElement>, model: Car){
        const HTMLPrice = document.querySelector(`.${stringFormat(model.getModel()).toString()} .car-price .base`) as HTMLSpanElement
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                opt.classList.add('active')
                switch (opt.getAttribute('id')) {
                    case `${stringFormat(model.getModel()).toString()}-interior-white`:
                        model.setInteriorDefault(InteriorType.White)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    case `${stringFormat(model.getModel()).toString()}-interior-cream`:
                        model.setInteriorDefault(InteriorType.Cream)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    default:
                        model.setInteriorDefault(InteriorType.Black)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                }
            })
        })
    }
    choseAutoPilotOptions(options: NodeListOf<HTMLLIElement>, model: Car){
        const HTMLPrice = document.querySelector(`.${stringFormat(model.getModel()).toString()} .car-price .base`) as HTMLSpanElement
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                if(e.currentTarget === opt){
                    opt.classList.add('active')
                }else{
                    opt.classList.remove('active')
                }
                switch (opt.getAttribute('id')) {
                    case `${stringFormat(model.getModel()).toString()}-autopilot-true`:
                        model.setAutoPilotDefault(true)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                    default:
                        model.setAutoPilotDefault(false)
                        setCost(model)
                        HTMLPrice.innerHTML = `Precio: ${model.totalCost} €`
                        break;
                }
            })
        })
    } 
}

