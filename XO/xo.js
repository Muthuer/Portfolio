var one=document.getElementById("one")
var two=document.getElementById("two")
var three=document.getElementById("three")
var four=document.getElementById("four")
var five=document.getElementById("five")
var six=document.getElementById("six")
var seven=document.getElementById("seven")
var eight=document.getElementById("eight")
var nine=document.getElementById("nine")
var Reset=document.getElementById("Reset")
var same=document.getElementsByClassName("same")

one.addEventListener("dblclick",()=>{
    one.style.color="white"
    one.innerHTML="X"
    
})
two.addEventListener("dblclick",()=>{
    two.style.color="white"
    two.innerHTML="X"
})
three.addEventListener("dblclick",()=>{
    three.style.color="white"
    three.innerHTML="X"
    
})
four.addEventListener("dblclick",()=>{
    four.style.color="white"
    four.innerHTML="X"
})
five.addEventListener("dblclick",()=>{
    five.style.color="white"
    five.innerHTML="X"
})
six.addEventListener("dblclick",()=>{
    six.style.color="white"
    six.innerHTML="X"
})
seven.addEventListener("dblclick",()=>{
    seven.style.color="white"
    seven.innerHTML="X"
})
eight.addEventListener("dblclick",()=>{
    eight.style.color="white"
    eight.innerHTML="X"
})
nine.addEventListener("dblclick",()=>{
    nine.style.color="white"
    nine.innerHTML="X"
})
one.addEventListener("click",()=>{
    one.style.color="white"
    one.innerHTML="O"
})
two.addEventListener("click",()=>{
    two.style.color="white"
    two.innerHTML="O"
})
three.addEventListener("click",()=>{
    three.style.color="white"
    three.innerHTML="O"
    if(one.textContent=="O" && two.textContent=="O" && three.textContent=="O"||"X")
        {
            one.style.backgroundColor="orange"
            
        }
})
four.addEventListener("click",()=>{
    four.style.color="white"
    four.innerHTML="O"
})
five.addEventListener("click",()=>{
    five.style.color="white"
    five.innerHTML="O"
})
six.addEventListener("click",()=>{
    six.style.color="white"
    six.innerHTML="O"
})
seven.addEventListener("click",()=>{
    seven.style.color="white"
    seven.innerHTML="O"
})
eight.addEventListener("click",()=>{
    eight.style.color="white"
    eight.innerHTML="O"
})
nine.addEventListener("click",()=>{
    nine.style.color="white"
    nine.innerHTML="O"
})
Reset.addEventListener("click", ()=>{
    one.innerHTML=two.innerHTML=
    three.innerHTML=four.innerHTML=
    five.innerHTML=six.innerHTML=
    seven.innerHTML=eight.innerHTML=
    nine.innerHTML=""
})









