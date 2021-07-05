const ekranEl = document.
querySelector(".ekran");
const artıButton = document.
querySelector(".artı");
const eksiButton = document.
querySelector(".eksi");

console.log(ekranEl, artıButton, eksiButton);

let sayac = 0;

artıButton.addEventListener("click",
() => {
    sayac = sayac + 1;
    console.log("artı tıklandı",sayac);
    ekranEl.innerHTML=sayac;

});
eksiButton.addEventListener("click",
() => {
    sayac = sayac - 1;
    console.log("eksi tıklandı",sayac);
    ekranEl.innerHTML=sayac;


});