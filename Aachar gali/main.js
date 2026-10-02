let images = document.querySelectorAll(".slides>img")

let currentindex = 0;

function showimage(index){
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

function autoplay(){
    currentindex = (currentindex + 1) % images.length;
    showimage(currentindex);
}

document.getElementById("prev").addEventListener("click",() =>{
    currentindex = (currentindex - 1 + images.length) % images.length;
    showimage(currentindex);
    
});

document.getElementById("next").addEventListener("click", autoplay
);

showimage(currentindex);

// setInterval(autoplay, 3000);