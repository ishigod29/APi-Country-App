const templateCardInfo = document.getElementById("template-card-info").content
const mainDetail = document.querySelector(".main-detail")
const query = new URLSearchParams(window.location.search)
const params = query.get("name")
const fragment = document.createDocumentFragment()

//console.log(templateCardInfo)
//conole.log(templateCard)

document.addEventListener("DOMContentLoaded", ()=>{
    fetchDataInfo()
})

const fetchDataInfo = async()=>{
    try {
        const res = await fetch("https://restcountries.com/v2/all")
        const data = await res.json()
        const dataFilterInfo = data.filter(item=>item.name === params)
        //console.log(dataFilterInfo)
        pintarCardsInfo(dataFilterInfo)
    } catch (error) {
        console.log(error)
    }
}


const pintarCardsInfo = (dataFilterInfo)=>{
    mainDetail.innerHTML=""
    dataFilterInfo.forEach(item=>{
        //console.log(item)
        const clone = templateCardInfo.cloneNode(true)

        clone.querySelector(".detail-flag").setAttribute("src", item.flag)
        clone.querySelector(".detail-body-title").textContent = item.name
        clone.querySelectorAll("span")[0].textContent = item.nativeName
        clone.querySelectorAll("span")[1].textContent = item.population
        clone.querySelectorAll("span")[2].textContent = item.region
        clone.querySelectorAll("span")[3].textContent = item.subregion
        clone.querySelectorAll("span")[4].textContent = item.capital
        clone.querySelectorAll("span")[5].textContent = item.area
        clone.querySelectorAll("span")[6].textContent = item.currencies[0].name
        clone.querySelectorAll("span")[7].textContent = item.languages[0].name

        fragment.appendChild(clone)
    })

    mainDetail.appendChild(fragment)
}
