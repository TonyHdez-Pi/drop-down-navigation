const featuresButton = document.querySelector(".featuresClick");
const featuresMenu = document.querySelector(".featuresMenu");
const companyButton = document.querySelector(".companyClick");
const companyMenu = document.querySelector(".companyMenu");

companyButton.addEventListener("click", ()  =>{
    companyMenu.classList.remove("hideMenu");
});
// companyButton.addEventListener("click", ()  =>{
//     companyMenu.classList.add("hideMenu");
// });
featuresButton.addEventListener("click", ()  =>{
    featuresMenu.classList.remove("hideMenu");
});
// featuresButton.addEventListener("click", ()  =>{
//     companyMenu.classList.add("hideMenu");
// });

console.log(2+2) 