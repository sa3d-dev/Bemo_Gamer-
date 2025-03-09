const menu = document.getElementById("menu")
const action = document.getElementById("actions")

menu.addEventListener("click",()=>{
    hundiemenu();
})

function hundiemenu(){
    menu.classList.toggle("is-active")
    action.classList.toggle("is-active")
}