const ekranEl = document.
querySelector(".ekran");
const artıButton = document.
querySelector(".artı");
const eksiButton = document.
querySelector(".eksi");
const carpiButton = document.
querySelector(".carpi");

console.log(ekranEl, artıButton, eksiButton, carpiButton);

let sayac = 0;

artıButton.addEventListener("click",
() => {
    sayac = sayac  + 1;
    console.log("artı tıklandı",sayac);
    ekranEl.innerHTML=sayac;

});
eksiButton.addEventListener("click",
() => {
    sayac = sayac - 1;
    console.log("eksi tıklandı",sayac);
    ekranEl.innerHTML=sayac;
});
carpiButton.addEventListener("click",
() => {
    sayac = sayac * 2;
    console.log("carpi tıklandı",sayac);
    ekranEl.innerHTML=sayac;
});