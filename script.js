// Getting the id for the button that is gonna be clicked
const menuItem = document.getElementsByClassName("menuItem");
// Getting the elements that gonna be displayed
const dropdownItem = document.getElementsByClassName("subMenu");
var isOpen = false;

menuItem[0].addEventListener("click", showHideMenu(0));
menuItem[1].addEventListener("click", showHideMenu(1));


function showHideMenu(num){
  menuItem[num].addEventListener("click", () => {
    if (isOpen == false) {
      dropdownItem[num].classList.remove("hide");
      isOpen = true;
    } else if (isOpen == true) {
      dropdownItem[num].classList.add("hide");
      isOpen = false;
    }
  });
}
// script for the mobile menu








