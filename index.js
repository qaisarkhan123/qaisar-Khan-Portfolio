var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("tab-active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("tab-active");
    document.getElementById(tabname).classList.add("active-tab");
}

var Sidemenu=document.getElementById("sidemenu");
function openmenu(){
    Sidemenu.style.right="0";
}
function closemenu(){
    Sidemenu.style.right="-200px";
}