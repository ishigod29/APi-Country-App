
const form = document.getElementById("form")
const inputForm = document.getElementById("input-form")

const formClient = (data)=>{
    form.addEventListener("keyup", (e)=>{
        e.preventDefault()
        const keys = inputForm.value.toLowerCase()
        //console.log(keys)
        const arrayFilter = data.filter(item =>{
            const keyApi = item.name.toLowerCase()
            if(keyApi.indexOf(keys) !== -1) {
                return item
            }
        })
        pintarCards(arrayFilter)
    })

}