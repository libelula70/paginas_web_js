function main1 () {
    //document.body.addEventListener('mousemove', (ev)=>{console.log(ev.clientX, ev.clientY)})

let aDivs = document.querySelectorAll('section div')
aDivs.forEach((div) => {
    div.addEventListener('mouseover', 
    () => {div.style.backgroundColor = "pink"}
        )
    div.addEventListener('mouseout',
    () => {div.style.backgroundColor = "brown"})
})

}

function main2 () {

    let aDivs = document.querySelectorAll('section div')
    aDivs.forEach((div) => {
    div.addEventListener('mouseover', hover)
    div.addEventListener('mouseout', hover)
})
function hover (oE) {
    if (oE.type == 'mouseover') {
        this.style.backgroundColor = "pink"
    } else {
        oE.target.style.backgroundColor = "brown"
    }
    
    
}
}

function main3 () {

    let aDivs = document.querySelectorAll('section div')
    aDivs.forEach((div) => {
    div.onmouseover = hover
    div.onmouseout = hover
})
function hover (oE) {
    if (oE.type == 'mouseover') {
        this.style.backgroundColor = "pink"
    } else {
        oE.target.style.backgroundColor = "brown"
    }
}


}
function main () {

    let aDivs = document.querySelectorAll('section div')
    aDivs.forEach((div) => {
    div.onmouseover = hover
    div.onmouseout = hover
})

document.querySelector('footer a')
    .addEventListener('click', navegar)


function hover (oE) {
    if (oE.type == 'mouseover') {
        this.style.backgroundColor = "pink"
    } else {
        oE.target.style.backgroundColor = "brown"
    }
}
    
    function navegar (oE) {
        oE.preventDefault()
        console.log('Navegando')
        let res = confirm("Estas seguro")
        if (res) {
            location.assign ('https://www.google.es')
        }
    }
}



document.addEventListener('DOMContentLoaded', main)

//window.addEventListener('load', main)