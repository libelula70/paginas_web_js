class App {
    constructor() {
        this.aNodosMenu= document.querySelectorAll('nav a')
        this.aSections= document.querySelectorAll('main>section')
        this.aOffset= []
        this.calcularOffsets()
        this.sectionActive = 0

        document.addEventListener('scroll',
            this.scrollDetect.bind(this))

        this.aNodosMenu.forEach (
            (nodoMenu)=> {nodoMenu.addEventListener('click', this.navegar.bind(this))}
        )
        
    }

    scrollDetect(oE) {
        let position = oE.target.scrollingElement.scrollTop
        let index
        this.aOffset.every(
            (offset, i) => {
                if(position >= offset) {
                    index = i
                    return true}
                    else {return false}
            })
            console.log(index)
            if (this.sectionActive != index) {
                this.aNodosMenu.forEach(
                    (nodoMenu) => {nodoMenu.classList.remove('active')}
                )
            this.aNodosMenu[index].classList.add('active')
            this.sectionActive = index
        }


    }
     /*    let position = oE.target.scrollingElement.scrollTop
        this.aOffset.forEach(
            (offset, i)=>{
                if (position >= offset) continue
                else {return i}
                }) */


    

    navegar(oE) {
        
        let i = oE.target.dataset.index
        oE.preventDefault()
        
        window.scroll({
            top: this.aOffset[i],
            left: 0,
            behavior: 'smooth'})

    }

    calcularOffsets() {
        this.aOffset= []
        this.aSections.forEach (
            (section) => {
                this.aOffset.push(section.offsetTop-60)
        })
        this.aOffset[0]=0
    }

}

document.addEventListener('DOMContentLoaded', ()=>{new App()})