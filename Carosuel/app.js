let img=document.querySelector("img")
let previous=document.querySelector(".fa-less-than")
let next=document.querySelector(".fa-greater-than")

let storage=["car-1.jpeg","car-2.jpeg","car-3.jpeg","car-4.jpeg","car-5.jpeg","car-6.jpeg"];

var index=0;

next.addEventListener("click",()=>{
    index=(index+1)%storage.length
    img.src=storage[index]
})
previous.addEventListener("click",()=>{
    index=(index-1+storage.length)%storage.length
    img.src=storage[index]
})

setInterval(()=>{
    index=(index+1)%storage.length
    img.src=storage[index]
},1000)