// function to expand and fix the side navigation menu bar
function showMenu(x){
    document.getElementById("navBar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";  
}

function hideMenu(){
    document.getElementById("navBar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var dropdown_buttons = document.getElementsByClassName("dropdown-button");
for(var i = 0; i < dropdown_buttons.length; i++){
    dropdown_buttons[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var dropdown_content = this.nextElementSibling;
        if(dropdown_content.style.display == "block"){
            dropdown_content.style.display = "none";
        } else{
            dropdown_content.style.display = "block";
        }
    });
}