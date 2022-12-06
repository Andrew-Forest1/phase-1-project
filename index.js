document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("container")
    const r2 = document.getElementById("R2-D2")
    
    fetch('https://swapi.dev/api/species')
    .then(res => res.json())
    .then(data => data.results.forEach(renderSpecies))
    
    r2.addEventListener('mouseenter', (e) => {
        e.target.classList.remove('pictures')
        e.target.classList.add('hover')
    })

    r2.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('hover')
        e.target.classList.add('pictures')
    })
    
    const renderSpecies = (specieObj) => {
        const newP = document.createElement('p')
        console.log(specieObj)
        newP.innerText = specieObj.name
        container.appendChild(newP);
    }
})

