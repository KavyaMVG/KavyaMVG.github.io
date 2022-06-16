let header = document.querySelector("header");
let closeButton = document.querySelector(".fa-xmark")
let openBars = document.querySelector(".fa-bars")
let main = document.getElementById("home");
let body = document.getElementById("body");
let mobileMenu = document.querySelector(".menu-bar-logo")

openBars.addEventListener('click',(e)=>{
    header.classList.add("open-menu")
    main.classList.add("overlay");
    body.classList.add("no-scroll")
})

closeButton.addEventListener('click',(e)=>{
    if(header.classList.contains("open-menu")){
        header.classList.remove("open-menu");
        main.classList.remove("overlay");
        body.classList.remove("no-scroll");
    }
});

window.onscroll = toggleNav


function toggleNav(){
    if(window.pageYOffset > 70){
        if(window.innerWidth >420){
            header.classList.add("box-shadow");
        } else{
            mobileMenu.classList.add("box-shadow");    
        }
    }else if(window.pageYOffset < 70){
        if(window.innerWidth >420){
            header.classList.remove("box-shadow");
        } else{
            mobileMenu.classList.remove("box-shadow");    
        }
    }
    
}


const fetchData = async () => {
    let data  = await fetch("https://api.github.com/users/KavyaMVG/repos");
    data = await data.json();
    console.log(data[0])
}

fetchData()