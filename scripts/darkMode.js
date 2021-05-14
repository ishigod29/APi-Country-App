const btnDark = document.querySelector(".btn-dark")

const localConfig = localStorage.getItem("tema")
if(localConfig === "dark"){
    document.body.classList.toggle("dark-mode")
}else if(localConfig === "light"){
    document.body.classList.remove("dark-mode")
}

btnDark.addEventListener("click", ()=>{

    let color = document.body.classList.toggle("dark-mode")
    color = document.body.classList.contains("dark-mode") ? "dark" : "light"

    if(document.body.className === "dark-mode"){
        btnDark.innerHTML = `
        <i class="far fa-sun"></i> <span class="n-text"> Ligth Mode</span>
        `
    }else{
        btnDark.innerHTML = `
        <i class="far fa-moon"></i> <span class="n-text"> Dark Mode</span>
        `
    }
    localStorage.setItem("tema", color)
})
