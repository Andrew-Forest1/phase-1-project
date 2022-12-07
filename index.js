document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const speciesDetails = document.getElementById("species-details");
  const detailImg = document.getElementById("detail-img");
  const speciesName = document.getElementById("name");
  const height = document.getElementById("height");
  const lifespan = document.getElementById("lifespan");
  const classification = document.getElementById("classification");
  const designation = document.getElementById("designation");
  const eyeColor = document.getElementById("eye-color");
  const hairColor = document.getElementById("hair-color");
  const homeWorld = document.getElementById("homeworld");
  const language = document.getElementById("language");
  const people = document.getElementById("people");
  const films = document.getElementById("films");
  const skinColor = document.getElementById("skin-colors");

  //const r2 = document.getElementById("R2-D2")

  fetch("http://localhost:3000/species")
    .then((res) => res.json())
    .then((data) => data.forEach(renderSpecies));

  const renderSpecies = (specieObj) => {
    const newImg = document.createElement("img");
    //console.log(specieObj)
    newImg.innerText = specieObj.name;
    newImg.src = specieObj.image;
    newImg.alt = specieObj.name;
    newImg.classList.add("pictures");

    newImg.addEventListener("click", ()=> displayDetails(specieObj));
    displayDetails(specieObj)
    newImg.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("hover");
      e.target.classList.add("pictures");
    });

    newImg.addEventListener("mouseenter", (e) => {
      e.target.classList.remove("pictures");
      e.target.classList.add("hover");
    });
    container.appendChild(newImg);
  };
  const displayDetails = (specieObj) => {
    const detailImg = document.getElementById("detail-image");
    detailImg.src = specieObj.image;
    speciesName.innerText = specieObj.name;

    classification.innerText = specieObj.classification;
    designation.innerText = specieObj.designation;
    height.innerText = specieObj.average_height;
    lifespan.innerText = specieObj.average_lifespan;
    eyeColor.innerText = specieObj.eye_colors;
    hairColor.innerText = specieObj.hair_colors;
    homeWorld.innerText = specieObj.homeworld;
    language.innerText = specieObj.language;
    // people.innerText = specieObj.people
    // films.innerText = specieObj.films
    skinColor.innerText = specieObj.skin_colors;
    // speciesDetails.appendChild(newImg);
  };
  const handleClick = (specieObj) => {
    displayDetails(specieObj);
  };
});

console.log("yo");
