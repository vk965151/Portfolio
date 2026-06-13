let btn = document.querySelector(".hii");
let mode = "light";
btn.addEventListener("click" , () => {
    if(mode == "light"){
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
         document.querySelector("body").style.color = "white"

    }
    else{
        mode == "light";
        document.querySelector("body").style.backgroundColor = " rgb(0, 0, 33)";
         document.querySelector("body").style.color = "black"
    }


});
