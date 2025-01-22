let divBack = document.getElementById("title")
let btn = document.getElementById("change")

function changeBg()
{
    console.log("Hello");
    divBack.style.background ="red"
}

btn.addEventListener("click",changeBg)
btn.addEventListener("dblclick",()=>{
    divBack.style.background = "purple"
})