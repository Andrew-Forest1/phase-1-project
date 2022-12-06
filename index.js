document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("container")
    //const r2 = document.getElementById("R2-D2")

    fetch('http://localhost:3000/species')
    .then(res => res.json())
    .then(data => data.forEach(renderSpecies))
    
/*     r2.addEventListener('mouseenter', (e) => {
        e.target.classList.remove('pictures')
        e.target.classList.add('hover')
    })

    r2.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('hover')
        e.target.classList.add('pictures')
    }) */
    
    const renderSpecies = (specieObj) => {
        const newImg = document.createElement('img')
        //console.log(specieObj)
        newImg.innerText = specieObj.name
        newImg.src = specieObj.image
        newImg.alt = specieObj.name
        newImg.classList.add('pictures')

        newImg.addEventListener('mouseleave', (e) => {
            e.target.classList.remove('hover')
            e.target.classList.add('pictures')
        })

        newImg.addEventListener('mouseenter', (e) => {
            e.target.classList.remove('pictures')
            e.target.classList.add('hover')
        })
        container.appendChild(newImg);
    }
})

//console.log('yo')
