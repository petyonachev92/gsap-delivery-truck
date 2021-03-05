import gsap from 'gsap/all'
import selectors from './selectors'

export default class Animation {
    constructor() {
        this._tl = gsap.timeline().pause()
        
        selectors.playBtn.addEventListener("click", () => this._tl.restart().play())
        selectors.truckBtn.addEventListener("click", () => this._tl.restart().play())
        selectors.pauseBtn.addEventListener("click", () => this._tl.pause())
        selectors.reverseBtn.addEventListener("click", () => this._tl.reverse())
        this.start()
    }

    async start() {
        //tweens
        this._tl.to(selectors.list, {id: "listUp", y: -150})
        this._tl.to(selectors.list, {id: "listDown", y: 0, duration: 0.3})
        this._tl.to(selectors.listItems[0], {id: "listItem0", y: 50, opacity: 0, duration: 0.4}, "-=0.1")
        this._tl.to(selectors.listItems[1], {id: "listItem1", y: 100, opacity: 0, duration: 0.4}, "-=0.5")
        this._tl.to(selectors.listItems[2], {id: "listItem2", y: 150, opacity: 0, duration: 0.4}, "-=0.5")
        this._tl.to(selectors.truckBtnBg, {id: "truckBtnScaleUp", scale: 1.1, duration: 0.3})
        this._tl.to(selectors.truckBtnBg, {id: "truckBtnScaleDown", scale: 1, duration: 0.3})
        this._tl.to(selectors.containerParts, {id: "containerPart", opacity: 1, duration: 0.3})
        this._tl.to(selectors.container, {id: "container", opacity: 1, duration: 0.5})
        this._tl.to(selectors.backWheelBack2, {id: "backWheelBack2", opacity: 1, ease: "power1"})
        this._tl.to(selectors.backWheel1, {id: "backWheel1", opacity: 1, ease: "power1"}, "-=0.5")
        this._tl.to(selectors.backWheelBack1, {id: "backWheelBack1", opacity: 1, ease: "power1"}, "-=0.5")
        this._tl.to(selectors.backWheel2, {id: "bac", opacity: 1, ease: "power1"}, "-=0.5")
        this._tl.to(selectors.frontGroup, {id: "fronGrpup", opacity: 1})
        this._tl.to(selectors.frontWheelsBack, {id: "frontWheelsBack", opacity: 1}, "-=0.5")
        this._tl.to(selectors.frontWheel1, {id: "frontWheel1", opacity: 1}, "-=0.5")
        this._tl.to(selectors.frontWheel2, {id: "frontWheel2", opacity: 1}, "-=0.5")
        this._tl.to(selectors.truck, {x: 500, opacity: 0, ease: "back"})
        this._tl.to(selectors.shippedLabel, {opacity: 1, duration: 1})

    }
}