const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesSize = 1;
let noSize = 1;

noBtn.addEventListener("click", () => {
  yesSize += 0.1;
  noSize -= 0.05;

  yesBtn.style.transform = `scale(${yesSize})`;
  noBtn.style.transform = `scale(${noSize})`;

  if (noSize <= 0.3) {
    noBtn.disabled = true;
    noBtn.innerText = "ok ISABELLA YA NO TE MOLESTO...";
  }
});
yesBtn.addEventListener("click", () => {
  yesBtn.innerText = "¡TE AMO! ❤️";
  yesBtn.style.backgroundColor = "#ff69b4"; // Cambia el color de fondo a rosa
  yesBtn.style.color = "#fff"; // Cambia el color del texto a blanco
  noBtn.disabled = true;
  noBtn.style.display = "none";
});



const card = document.getElementById("surpriseCard");
const image = document.getElementById("surpriseImage");

card.addEventListener("click", () => {
  image.style.display = "block";
  card.style.display = "none";
});



