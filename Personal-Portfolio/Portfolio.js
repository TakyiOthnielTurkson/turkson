const openMenu =document.querySelector("#openMenu");
const closeMenu =document.querySelector("#closeMenu");

openMenu.addEventListener("click",function(){
    document.body.classList.toggle("showMenu")
})
closeMenu.addEventListener("click",function(){
    document.body.classList.remove("showMenu")
})