const openMenu =document.querySelector("#menu-open-button");

openMenu.addEventListener("click",function(){
    document.body.classList.toggle("showMenu")
})
const closeMenu =document.querySelector("#menu-close-button");
closeMenu.addEventListener("click",function(){
    document.body.classList.remove("showMenu")
})