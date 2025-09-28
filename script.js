const btn = document.createElement("button"); // skapar knappen

btn.textContent = "PRESS ME SENPAI~!"; //texten i knappen

btn.classList.add("my-button"); //ger knappen class för att kunna styla i css

const container = document.querySelector("#container"); // lägg till knappen icontainer elementet
container.appendChild(btn); // lägg till som sista barn i containern

btn.addEventListener("click", () => {
  //lägg till vad som händer när man klickar på knappen
  alert("Ikuuuuuu~!");
});
