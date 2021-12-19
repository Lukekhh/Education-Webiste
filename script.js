var menuBtn = document.getElementById('menu');
var MenuItems = document.getElementById('navbar');

MenuItems.style.maxHeight = "0px";

function toggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "260px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}