document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("container")
    const specieDetails = document.getElementById("species-detail")
    const specieForm = document.getElementById("new-species")
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
    
    specieForm.addEventListener('submit', (e) => {
        e.preventDefault()
        //debugger
        const newSpeciesObj = {
            name: e.target.name.value, 
            image: e.target.image.value,
            classification: e.target.classification.value, 
            designation: e.target.designation.value, 
            average_height: e.target.averageHeight.value, 
            skin_colors: e.target.skinColors.value, 
            hair_colors: e.target.hairColors.value, 
            eye_colors: e.target.eyeColors.value, 
            average_lifespan: e.target.averageLifespan.value, 
            homeworld: e.target.homeworld.value, 
            language: e.target.language.value, 
            people: [e.target.people.value], 
            films: [e.target.films.value], 
            created: "2014-12-10T13:52:11.567000Z", 
            edited: "2014-12-20T21:36:42.136000Z", 
            url: "https://swapi.dev/api/species/1/"
        }

        postSpeciesToJSON(newSpeciesObj)
        
    })

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

        //Add click Event to newImg, which will display details of the Species

        container.appendChild(newImg);
    }

    const postSpeciesToJSON = (speciesObj) => {
        fetch("http://localhost:3000/species", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(speciesObj)
        })
        .then(response => response.json())
        .then(data => renderSpecies(data))
    }
})

//console.log('yo')
