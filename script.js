function heart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerText="❤️";
    heart.style.left=Math.random()*80+"vw";
    heart.style.animaitonDuration=Math.random()*2+3;
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },3000)
}

setInterval((heart),200);