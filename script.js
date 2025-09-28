const btn = document.querySelector("#my-button"); // skapar en variabel med värdet btn(kan välja själv),
//  hittar elementet med id my-button i index
// (id="my-button")
// sparar elementet i en variabel som heter btn.
btn.addEventListener("click", () => {
  //lägg till vad som händer när man klickar på knappen
  alert("Ikuuuuuu~!");
  document.body.classList.toggle("blue-bg"); // ändrar bakgrundsfärgen on click
  setTimeout(() => {
    // tar bort bakrundsfärgen efter 3 sec
    document.body.classList.remove("blue-bg");
  }, 3000);
});
