var collection = document.getElementById("collection");//tło całego collection
var character1Info = document.getElementById("character1Info");//steven
var character2Info = document.getElementById("character2Info");//granat
var charStats = document.getElementById("charStats");
var charFace = document.getElementById("charFace");
character1Info.addEventListener("click", () => {
    collection.style.backgroundImage = 'url("images/background/steven_universe_background.png")';
    charFace.style.backgroundImage = 'url("images/character_icon/steven.png")';
    charStats.innerHTML = "<p>Steven Universe</p><p>Żywioł: earth, normal</p><p>jakaś opis</p>";
});
character2Info.addEventListener("click", () => {
    charFace.style.backgroundImage = 'url("images/character_icon/granat.png")';
    charStats.innerHTML = "<p>Granat</p><p>Żywioł: earth</p><p>jakaś opis</p>";
});