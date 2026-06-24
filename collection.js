var character1Info = document.getElementById("character1Info");
var character2Info = document.getElementById("character2Info");
var charStats = document.getElementById("charStats");
var charFace = document.getElementById("charFace");
character1Info.addEventListener("click", () => {
    charFace.style.backgroundColor = "brown";
    charStats.innerHTML = "<p>Steven Universe</p><p>Żywioł: earth, normal</p><p>jakaś opis</p>";
});
character2Info.addEventListener("click", () => {
    charFace.style.backgroundColor = "maroon";
    charStats.innerHTML = "<p>Granat</p><p>Żywioł: earth</p><p>jakaś opis</p>";
});