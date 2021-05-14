const templateCard = document.getElementById("template-card").content
const main = document.querySelector("main")
const fragment = document.createDocumentFragment()

//console.log(templateCard)

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})

const fetchData = async()=>{
    try {
        const res = await fetch("https://restcountries.eu/rest/v2/all")
        const data = await res.json()
        formClient(data)
        filter(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}


const pintarCards = (data)=>{
    main.innerHTML=""
    data.forEach(item =>{

        /*main.innerHTML +=`
        <article class="card">
        <img class="card-flag" src="${item.flag}" alt="">
        <div class="card-body">
            <h2 class="card-body-title">Australia</h2>
            <div class="card-body-info">
                <p class="card-info-text">Poblacion: <span>82738378</span></p>
                <p class="card-info-text">Region: <span>Europa</span></p>
                <p class="card-info-text">Capital: <span>hbygfe</span></p>
                <a class="card-info-link" href="detail.html">Mas Informacion</a>
            </div>
        </div>
        </article>
        `*/
        //console.log(item)
        const clone = templateCard.cloneNode(true)

        clone.querySelector(".card-flag").setAttribute("src", item.flag)
        clone.querySelector(".card-body-title").textContent = item.name
        clone.querySelectorAll("span")[0].textContent = item.population
        clone.querySelectorAll("span")[1].textContent = item.region
        clone.querySelectorAll("span")[2].textContent = item.capital
        clone.querySelector(".card-info-link").setAttribute("href", `detail.html?name=${item.name}`)
        fragment.appendChild(clone)
    })

    main.appendChild(fragment)
}

