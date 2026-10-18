var StevenUniverse = {
    nazwa:"steven",//następnie zrób konkretne skille, daj im energię, zrób couldowny oraz może ukwadrać trochę paski życia, bo słabo to wygląda
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:100, 
    energy:100,
    alive:true,
    element:["normal"],
    face:"url('StevenUniverse.png')",
    facewybrany:"można to zrobić zamiast opacity kiedyś",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Rzut Tarczą",
            type: "atak",
            targetsNeeded: 2,//może kiedyś 1 i rykoszet
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill2: {
            nazwa: "Regeneracja",
            type: "selfheal",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill3: {
            nazwa: "Bańka",
            type: "selfshield",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill4: {
            nazwa: "Lecznicza ślina",
            type: "heal",
            targetsNeeded: 2,
            targets: [],
            value: 250,
            energyNeeded: 50,
            couldown:2
        },
        skill5: {
            nazwa: "Osłona",
            type: "shield",
            targetsNeeded: 2,
            targets: [],
            value: 150,
            energyNeeded: 50,
            couldown:2
        },
        skill6:null
    }
};
var Granat = {
    nazwa:"granat",
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:180,
    energy:100,
    alive:true,
    element:["earth","ice","fire"],
    face:"url('Granat.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Uderzenie pięścią",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Gniew Szafir",
            type: "freeze",
            targetsNeeded: 1,
            targets: [],
            value: 200,
            rounds: 1,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Gniew Rubin",
            type: "fire",
            targetsNeeded: 1,
            targets: [],
            value: 200,
            DOTvalue: 100,
            rounds: 3,
            energyNeeded: 50,
            couldown:2
        },
        skill4:{
            nazwa: "Wysoko garda",
            type: "selfshield",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill5:{
            nazwa: "Przyszły cios",
            type: "pewnyKryt",
            targetsNeeded: 1,
            targets: [],
            energyNeeded: 50,
            couldown:2
        },
        skill6:null
    }
};
var Ametyst = {
    nazwa:"ametyst",
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:150, 
    energy:100,
    alive:true,
    element:["earth"],
    face:"url('Ametyst.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Siekanie",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Naładowany bicz",
            type: "atakObszarówka",
            targetsNeeded: 1,
            targets: [],
            value: 250,
            areaValue: 100,
            energyNeeded: 50,
            couldown:3
        },
        skill3:{
            nazwa: "Obracający pocisk",
            type: "atak+speed",
            targetsNeeded: 1,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:3
        },
        skill4:null,
        skill5:null,
        skill6:null
    }
};
var Perła = {
    nazwa:"perła",
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:190, 
    energy:100,
    alive:true,
    element:["earth"],
    face:"url('Perła.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Cięcie włócznią",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Wiązka energii",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Holo-perła",//wstawia holoperły wszędzie gdzie ktoś zginął, nowe kolejki, nie możesz wygrać mając same holoperły
            type: "summon",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill4:null,
        skill5:null,
        skill6:null
    }
};
var Holoperła = {
    nazwa:"Holo-perła",
    maxhp:1,
    hp:1,
    shield:0,
    speed:1, 
    energy:100,
    alive:true,
    element:["earth"],
    face:"url('Perła.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Parowanie, parowanie, atak!",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 100,
            energyNeeded: 50,
            couldown:1
        },
        skill2:null,
        skill3:null,
        skill4:null,
        skill5:null,
        skill6:null
    }
};
var Greg = {
    nazwa:"greg",
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:80, 
    energy:100,
    alive:true,
    element:["normal"],
    face:"url('Greg.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {//graga barda zrób supporta
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Heavy Metal",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 100,
            energyNeeded: 0,//dużo energii zużyje na pozostałe a zwykły atak będzie miał w gratisie
            couldown:1
        },
        skill2:{
            nazwa: "Hard Rock",
            type: "freeze",
            targetsNeeded: 2,
            targets: [],
            value: 0,
            rounds: 1,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Ambient ukulele",
            type: "healObszarówka",
            targetsNeeded: 1,//trzeba raz kliknąć, nie unikniesz
            targets: [],
            value: 100,
            energyNeeded: 50,
            couldown:2
        },
        skill4:{
            nazwa: "Wild Country",
            type: "speedObszarówka",//celowane moce pojedynczo krytują, a obszarówki raz dla wszystkich albo raz dla nikogo
            targetsNeeded: 1,
            targets: [],
            value: 30,//ilość znikanej energii
            energyNeeded: 50,
            couldown:2
        },
        skill5:null,
        skill6:null
    }
};
var Connie = {
    nazwa:"connie",
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:160, 
    energy:100,
    alive:true,
    element:["normal"],
    face:"url('Connie.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Siekanie",
            type: "atak",
            targetsNeeded: 2,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Precyzyjny atak",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Idealny moment",
            type: "selfPewnyKryt",
            targetsNeeded: 1,
            targets: [],
            energyNeeded: 50,
            couldown:2
        },
        skill4:null,
        skill5:null,
        skill6:null
    }
};
var Lapis = {
    nazwa:"lapis",
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:170, 
    energy:100,
    alive:true,
    element:["earth","water","ice"],
    face:"url('Lapis.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Tnąca fala",
            type: "atak",
            targetsNeeded: 3,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Śnieżyca",
            type: "freeze",
            targetsNeeded: 3,
            targets: [],
            value: 50,
            rounds: 1,
            energyNeeded: 50,
            couldown:3
        },
        skill3:{
            nazwa: "Strumień nieba",
            type: "atak+speed",
            targetsNeeded: 1,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill4:{
            nazwa: "Hydromimik",
            type: "summon",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill5:null,
        skill6:null
    }
};
var Hydromimik = {
    nazwa:"Hydromimik",
    maxhp:1,
    hp:1,
    shield:0,
    speed:1, 
    energy:100,
    alive:true,
    element:["earth","water","ice"],
    face:"url('Perła.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Tnąca fala",
            type: "atak",
            targetsNeeded: 3,
            targets: [],
            value: 50,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Śnieżyca",
            type: "freeze",
            targetsNeeded: 1,
            targets: [],
            value: 0,
            rounds: 1,
            energyNeeded: 50,
            couldown:3
        },
        skill3:{
            nazwa: "Strumień nieba",
            type: "atak+speed",
            targetsNeeded: 1,
            targets: [],
            value: 50,
            energyNeeded: 50,
            couldown:2
        },
        skill4:null,
        skill5:null,
        skill6:null
    }
};
var Perydot = {
    nazwa:"perydot",
    maxhp:1000,
    hp:1000,
    shield:150,
    speed:90, 
    energy:100,
    alive:true,
    element:["earth","robot"],
    face:"url('Perydot.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Blaster Perydot",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Naprawa",
            type: "selfMaxHeal",
            targetsNeeded: 1,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Granat energetyczny",
            type: "atakObszarówka",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            areaValue: 50,
            energyNeeded: 50,
            couldown:3
        },
        skill4:{
            nazwa: "Pole siłowe",
            type: "selfshield",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill5:null,
        skill6:null
    }
};
var Jaspis = {
    nazwa:"jaspis",
    maxhp:1000,
    hp:1000,
    shield:100,
    speed:200, 
    energy:100,
    alive:true,
    element:["earth"],
    face:"url('Jaspis.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Kula zniszczenia",//zrób jej dużo życia
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 350,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Naładowana kometa",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 600,
            energyNeeded: 50,
            couldown:3
        },
        skill3:{
            nazwa: "Opancerzenie",
            type: "selfshield",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill4:null,
        skill5:null,
        skill6:null
    }
};
var Bizmut = {
    nazwa:"bizmut",
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:120, 
    energy:100,
    alive:true,
    element:["earth"],
    face:"url('Bizmut.png')",
    couldown1:0,
    couldown2:0,
    couldown3:0,
    couldown4:0,
    couldown5:0,
    couldown6:0,
    poison: {
        DOTvalue:0,
        rounds:0
    },
    freeze: {
        rounds:0
    },
    fire: {
        DOTvalue:0,
        rounds:0
    },
    pewnyKryt: false,
    skills: {
        skill1: {
            nazwa: "Młot i kowadło",
            type: "atak",
            targetsNeeded: 2,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Ulepszenie ekwipunku",
            type: "pewnyKryt",
            targetsNeeded: 2,
            targets: [],
            energyNeeded: 50,
            couldown:2
        },
        skill3:null,
        skill4:null,
        skill5:null,
        skill6:null
    }
};
//zrób tak, żeby ulepy nie mogły zrobić takich samych speedów, bo potem dziwnie przeskakuje
var reakcjaElement = {
    normal: {//kiedyś zrób:demonic, vampire/undead, holy, shadow, plant  dawaj dla postaci jak mają kilka żywiołów pierwszy ten który jest im bliższy
        normal:1,
        earth:0.8,
        water:1,
        robot:0.8,
        ice:1,
        fire:1
    },
    earth: {
        normal:1.2,
        earth:1,
        water:1,
        robot:1,
        ice:1.2,
        fire:1.2
    },
    water: {
        normal:1,
        earth:1,
        water:1,
        robot:1.2,
        ice:0.8,
        fire:1.2
    },
    robot: {
        normal:1.2,
        earth:1,
        water:0.8,
        robot:1,
        ice:1.2,
        fire:1
    },
    ice: {
        normal:1.2,
        earth:0.8,
        water:0.8,
        robot:0.8,
        ice:1,
        fire:0.8
    },
    fire: {
        normal:1.2,
        earth:0.8,
        water:0.8,
        robot:1,
        ice:1.2,
        fire:1
    }
}

function getMultiplier(attacker,target){
    var multiplier = 1;
    for (let a of attacker) {
        for (let d of target) {
            const result = reakcjaElement[a]?.[d] ?? 1;
            multiplier *= result;
        }
    }
    return multiplier;
}

//guziczki funkcjonalne
document.getElementById("playButton").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("selectMenu").style.display = "block";
});
document.getElementById("collectionButton").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("collection").style.display = "block";
});
document.getElementById("creditsButton").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("credits").style.display = "block";
});
document.getElementById("cofka1").addEventListener("click", () => {
    document.getElementById("selectMenu").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    charSelect1.value = "0";
    charSelect2.value = "0";
    charSelect3.value = "0";
    charSelect4.value = "0";
    charSelect5.value = "0";
    charSelect6.value = "0";
    charSelect7.value = "0";
    charSelect8.value = "0";
    charSelect9.value = "0";
    charSelect10.value = "0";
    charSelect1.style.background = "#444";
    charSelect2.style.background = "#444";
    charSelect3.style.background = "#444";
    charSelect4.style.background = "#444";
    charSelect5.style.background = "#444";
    charSelect6.style.background = "#444";
    charSelect7.style.background = "#444";
    charSelect8.style.background = "#444";
    charSelect9.style.background = "#444";
    charSelect10.style.background = "#444";
});
document.getElementById("cofka2").addEventListener("click", () => {
    document.getElementById("collection").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    charFace.style.backgroundColor = "brown";
    charStats.innerHTML = "<p>Steven Universe</p><p>Żywioł: earth, normal</p><p>jakaś opis</p>";
});
document.getElementById("cofka3").addEventListener("click", () => {
    document.getElementById("credits").style.display = "none";
    document.getElementById("menu").style.display = "flex";
});
document.getElementById("cofka4").addEventListener("click", () => {
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    scenaPauzy.style.display = "none";
    charSelect1.value = "0";
    charSelect2.value = "0";
    charSelect3.value = "0";
    charSelect4.value = "0";
    charSelect5.value = "0";
    charSelect6.value = "0";
    charSelect7.value = "0";
    charSelect8.value = "0";
    charSelect9.value = "0";
    charSelect10.value = "0";
    charSelect1.style.background = "#444";
    charSelect2.style.background = "#444";
    charSelect3.style.background = "#444";
    charSelect4.style.background = "#444";
    charSelect5.style.background = "#444";
    charSelect6.style.background = "#444";
    charSelect7.style.background = "#444";
    charSelect8.style.background = "#444";
    charSelect9.style.background = "#444";
    charSelect10.style.background = "#444";
    akcja.targets = [];
    akcja = null;
    poz1.style.opacity = 1;
    poz2.style.opacity = 1;
    poz3.style.opacity = 1;
    poz4.style.opacity = 1;
    poz5.style.opacity = 1;
    poz6.style.opacity = 1;
    poz7.style.opacity = 1;
    poz8.style.opacity = 1;
    poz9.style.opacity = 1;
    poz10.style.opacity = 1;
    i = 0;
    skillzestaw.style.display = "none";
    // nie da się zrobić cofnięcia, zrób po prostu, że przeładowuje stronę
});

var charSelect1 = document.getElementById("charSelect1");
var charSelect2 = document.getElementById("charSelect2");
var charSelect3 = document.getElementById("charSelect3");
var charSelect4 = document.getElementById("charSelect4");
var charSelect5 = document.getElementById("charSelect5");
var charSelect6 = document.getElementById("charSelect6");
var charSelect7 = document.getElementById("charSelect7");
var charSelect8 = document.getElementById("charSelect8");
var charSelect9 = document.getElementById("charSelect9");
var charSelect10 = document.getElementById("charSelect10");

var character1 = document.getElementById("character1");
var character2 = document.getElementById("character2");
var character3 = document.getElementById("character3");
var character4 = document.getElementById("character4");
var character5 = document.getElementById("character5");
var character6 = document.getElementById("character6");
var character7 = document.getElementById("character7");
var character8 = document.getElementById("character8");
var character9 = document.getElementById("character9");
var character10 = document.getElementById("character10");

var poz1 = document.getElementById("poz1");
var poz2 = document.getElementById("poz2");
var poz3 = document.getElementById("poz3");
var poz4 = document.getElementById("poz4");
var poz5 = document.getElementById("poz5");
var poz6 = document.getElementById("poz6");
var poz7 = document.getElementById("poz7");
var poz8 = document.getElementById("poz8");
var poz9 = document.getElementById("poz9");
var poz10 = document.getElementById("poz10");

var postaćPoz1
var postaćPoz2
var postaćPoz3
var postaćPoz4
var postaćPoz5
var postaćPoz6
var postaćPoz7
var postaćPoz8
var postaćPoz9
var postaćPoz10

//wybór postaci
character1.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "1";
        charSelect1.style.backgroundColor = "brown";
        postaćPoz1 = StevenUniverse;
        postaćPoz1.top = getComputedStyle(poz1).top; //getComputedStyle bierze wszystko, czyli 100px
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "1";
        charSelect2.style.backgroundColor = "brown";
        postaćPoz2 = StevenUniverse;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "1";
        charSelect3.style.backgroundColor = "brown";
        postaćPoz3 = StevenUniverse;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "1";
        charSelect4.style.backgroundColor = "brown";
        postaćPoz4 = StevenUniverse;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "1";
        charSelect5.style.backgroundColor = "brown";
        postaćPoz5 = StevenUniverse;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "1";
        charSelect6.style.backgroundColor = "brown";
        postaćPoz6 = StevenUniverse;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "1";
        charSelect7.style.backgroundColor = "brown";
        postaćPoz7 = StevenUniverse;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "1";
        charSelect8.style.backgroundColor = "brown";
        postaćPoz8 = StevenUniverse;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "1";
        charSelect9.style.backgroundColor = "brown";
        postaćPoz9 = StevenUniverse;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "1";
        charSelect10.style.backgroundColor = "brown";
        postaćPoz10 = StevenUniverse;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character2.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "2";
        charSelect1.style.backgroundColor = "maroon";
        postaćPoz1 = Granat;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "2";
        charSelect2.style.backgroundColor = "maroon";
        postaćPoz2 = Granat;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "2";
        charSelect3.style.backgroundColor = "maroon";
        postaćPoz3 = Granat;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "2";
        charSelect4.style.backgroundColor = "maroon";
        postaćPoz4 = Granat;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "2";
        charSelect5.style.backgroundColor = "maroon";
        postaćPoz5 = Granat;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "2";
        charSelect6.style.backgroundColor = "maroon";
        postaćPoz6 = Granat;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "2";
        charSelect7.style.backgroundColor = "maroon";
        postaćPoz7 = Granat;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "2";
        charSelect8.style.backgroundColor = "maroon";
        postaćPoz8 = Granat;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "2";
        charSelect9.style.backgroundColor = "maroon";
        postaćPoz9 = Granat;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "2";
        charSelect10.style.backgroundColor = "maroon";
        postaćPoz10 = Granat;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character3.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "3";
        charSelect1.style.backgroundColor = "blueviolet";
        postaćPoz1 = Ametyst;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "3";
        charSelect2.style.backgroundColor = "blueviolet";
        postaćPoz2 = Ametyst;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "3";
        charSelect3.style.backgroundColor = "blueviolet";
        postaćPoz3 = Ametyst;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "3";
        charSelect4.style.backgroundColor = "blueviolet";
        postaćPoz4 = Ametyst;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "3";
        charSelect5.style.backgroundColor = "blueviolet";
        postaćPoz5 = Ametyst;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "3";
        charSelect6.style.backgroundColor = "blueviolet";
        postaćPoz6 = Ametyst;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "3";
        charSelect7.style.backgroundColor = "blueviolet";
        postaćPoz7 = Ametyst;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "3";
        charSelect8.style.backgroundColor = "blueviolet";
        postaćPoz8 = Ametyst;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "3";
        charSelect9.style.backgroundColor = "blueviolet";
        postaćPoz9 = Ametyst;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "3";
        charSelect10.style.backgroundColor = "blueviolet";
        postaćPoz10 = Ametyst;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character4.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "4";
        charSelect1.style.backgroundColor = "lightcyan";
        postaćPoz1 = Perła;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "4";
        charSelect2.style.backgroundColor = "lightcyan";
        postaćPoz2 = Perła;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "4";
        charSelect3.style.backgroundColor = "lightcyan";
        postaćPoz3 = Perła;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "4";
        charSelect4.style.backgroundColor = "lightcyan";
        postaćPoz4 = Perła;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "4";
        charSelect5.style.backgroundColor = "lightcyan";
        postaćPoz5 = Perła;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "4";
        charSelect6.style.backgroundColor = "lightcyan";
        postaćPoz6 = Perła;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "4";
        charSelect7.style.backgroundColor = "lightcyan";
        postaćPoz7 = Perła;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "4";
        charSelect8.style.backgroundColor = "lightcyan";
        postaćPoz8 = Perła;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "4";
        charSelect9.style.backgroundColor = "lightcyan";
        postaćPoz9 = Perła;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "4";
        charSelect10.style.backgroundColor = "lightcyan";
        postaćPoz10 = Perła;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character5.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "5";
        charSelect1.style.backgroundColor = "bisque";
        postaćPoz1 = Greg;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "5";
        charSelect2.style.backgroundColor = "bisque";
        postaćPoz2 = Greg;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "5";
        charSelect3.style.backgroundColor = "bisque";
        postaćPoz3 = Greg;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "5";
        charSelect4.style.backgroundColor = "bisque";
        postaćPoz4 = Greg;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "5";
        charSelect5.style.backgroundColor = "bisque";
        postaćPoz5 = Greg;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "5";
        charSelect6.style.backgroundColor = "bisque";
        postaćPoz6 = Greg;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "5";
        charSelect7.style.backgroundColor = "bisque";
        postaćPoz7 = Greg;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "5";
        charSelect8.style.backgroundColor = "bisque";
        postaćPoz8 = Greg;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "5";
        charSelect9.style.backgroundColor = "bisque";
        postaćPoz9 = Greg;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "5";
        charSelect10.style.backgroundColor = "bisque";
        postaćPoz10 = Greg;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character6.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "1";
        charSelect1.style.backgroundColor = "antiquewhite";
        postaćPoz1 = Connie;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "1";
        charSelect2.style.backgroundColor = "antiquewhite";
        postaćPoz2 = Connie;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "1";
        charSelect3.style.backgroundColor = "antiquewhite";
        postaćPoz3 = Connie;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "1";
        charSelect4.style.backgroundColor = "antiquewhite";
        postaćPoz4 = Connie;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "1";
        charSelect5.style.backgroundColor = "antiquewhite";
        postaćPoz5 = Connie;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "1";
        charSelect6.style.backgroundColor = "antiquewhite";
        postaćPoz6 = Connie;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "1";
        charSelect7.style.backgroundColor = "antiquewhite";
        postaćPoz7 = Connie;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "1";
        charSelect8.style.backgroundColor = "antiquewhite";
        postaćPoz8 = Connie;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "1";
        charSelect9.style.backgroundColor = "antiquewhite";
        postaćPoz9 = Connie;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "1";
        charSelect10.style.backgroundColor = "antiquewhite";
        postaćPoz10 = Connie;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character7.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "1";
        charSelect1.style.backgroundColor = "blue";
        postaćPoz1 = Lapis;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "1";
        charSelect2.style.backgroundColor = "blue";
        postaćPoz2 = Lapis;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "1";
        charSelect3.style.backgroundColor = "blue";
        postaćPoz3 = Lapis;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "1";
        charSelect4.style.backgroundColor = "blue";
        postaćPoz4 = Lapis;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "1";
        charSelect5.style.backgroundColor = "blue";
        postaćPoz5 = Lapis;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "1";
        charSelect6.style.backgroundColor = "blue";
        postaćPoz6 = Lapis;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "1";
        charSelect7.style.backgroundColor = "blue";
        postaćPoz7 = Lapis;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "1";
        charSelect8.style.backgroundColor = "blue";
        postaćPoz8 = Lapis;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "1";
        charSelect9.style.backgroundColor = "blue";
        postaćPoz9 = Lapis;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "1";
        charSelect10.style.backgroundColor = "blue";
        postaćPoz10 = Lapis;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character8.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "1";
        charSelect1.style.backgroundColor = "green";
        postaćPoz1 = Perydot;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "1";
        charSelect2.style.backgroundColor = "green";
        postaćPoz2 = Perydot;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "1";
        charSelect3.style.backgroundColor = "green";
        postaćPoz3 = Perydot;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "1";
        charSelect4.style.backgroundColor = "green";
        postaćPoz4 = Perydot;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "1";
        charSelect5.style.backgroundColor = "green";
        postaćPoz5 = Perydot;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "1";
        charSelect6.style.backgroundColor = "green";
        postaćPoz6 = Perydot;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "1";
        charSelect7.style.backgroundColor = "green";
        postaćPoz7 = Perydot;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "1";
        charSelect8.style.backgroundColor = "green";
        postaćPoz8 = Perydot;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "1";
        charSelect9.style.backgroundColor = "green";
        postaćPoz9 = Perydot;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "1";
        charSelect10.style.backgroundColor = "green";
        postaćPoz10 = Perydot;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character9.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "1";
        charSelect1.style.backgroundColor = "goldenrod";
        postaćPoz1 = Jaspis;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "1";
        charSelect2.style.backgroundColor = "goldenrod";
        postaćPoz2 = Jaspis;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "1";
        charSelect3.style.backgroundColor = "goldenrod";
        postaćPoz3 = Jaspis;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "1";
        charSelect4.style.backgroundColor = "goldenrod";
        postaćPoz4 = Jaspis;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "1";
        charSelect5.style.backgroundColor = "goldenrod";
        postaćPoz5 = Jaspis;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "1";
        charSelect6.style.backgroundColor = "goldenrod";
        postaćPoz6 = Jaspis;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "1";
        charSelect7.style.backgroundColor = "goldenrod";
        postaćPoz7 = Jaspis;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "1";
        charSelect8.style.backgroundColor = "goldenrod";
        postaćPoz8 = Jaspis;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "1";
        charSelect9.style.backgroundColor = "goldenrod";
        postaćPoz9 = Jaspis;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "1";
        charSelect10.style.backgroundColor = "goldenrod";
        postaćPoz10 = Jaspis;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character10.addEventListener("click",() => {
    if(charSelect1.value === "0"){
        charSelect1.value = "1";
        charSelect1.style.backgroundColor = "cadetblue";
        postaćPoz1 = Bizmut;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "1";
        charSelect2.style.backgroundColor = "cadetblue";
        postaćPoz2 = Bizmut;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "1";
        charSelect3.style.backgroundColor = "cadetblue";
        postaćPoz3 = Bizmut;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "1";
        charSelect4.style.backgroundColor = "cadetblue";
        postaćPoz4 = Bizmut;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "1";
        charSelect5.style.backgroundColor = "cadetblue";
        postaćPoz5 = Bizmut;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "1";
        charSelect6.style.backgroundColor = "cadetblue";
        postaćPoz6 = Bizmut;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "1";
        charSelect7.style.backgroundColor = "cadetblue";
        postaćPoz7 = Bizmut;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "1";
        charSelect8.style.backgroundColor = "cadetblue";
        postaćPoz8 = Bizmut;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "1";
        charSelect9.style.backgroundColor = "cadetblue";
        postaćPoz9 = Bizmut;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "1";
        charSelect10.style.backgroundColor = "cadetblue";
        postaćPoz10 = Bizmut;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
//cofnięcie postaci
charSelect1.addEventListener("click", () => {
    charSelect1.value = "0";
    charSelect1.style.background = "#444";
});
charSelect2.addEventListener("click", () => {
    charSelect2.value = "0";
    charSelect2.style.background = "#444";
});
charSelect3.addEventListener("click", () => {
    charSelect3.value = "0";
    charSelect3.style.background = "#444";
});
charSelect4.addEventListener("click", () => {
    charSelect4.value = "0";
    charSelect4.style.background = "#444";
});
charSelect5.addEventListener("click", () => {
    charSelect5.value = "0";
    charSelect5.style.background = "#444";
});
charSelect6.addEventListener("click", () => {
    charSelect6.value = "0";
    charSelect6.style.background = "#444";
});
charSelect7.addEventListener("click", () => {
    charSelect7.value = "0";
    charSelect7.style.background = "#444";
});
charSelect8.addEventListener("click", () => {
    charSelect8.value = "0";
    charSelect8.style.background = "#444";
});
charSelect9.addEventListener("click", () => {
    charSelect9.value = "0";
    charSelect9.style.background = "#444";
});
charSelect10.addEventListener("click", () => {
    charSelect10.value = "0";
    charSelect10.style.background = "#444";
});
//start gry
document.getElementById("gameStart").addEventListener("click", () => {
    if(charSelect1.value != "0" &&
    charSelect2.value != "0" &&
    charSelect3.value != "0" &&
    charSelect4.value != "0" &&
    charSelect5.value != "0" &&
    charSelect6.value != "0" &&
    charSelect7.value != "0" &&
    charSelect8.value != "0" &&
    charSelect9.value != "0" &&
    charSelect10.value != "0"){
        poz1.style.backgroundImage = postaćPoz1.face;
        poz2.style.backgroundImage = postaćPoz2.face;
        poz3.style.backgroundImage = postaćPoz3.face;
        poz4.style.backgroundImage = postaćPoz4.face;
        poz5.style.backgroundImage = postaćPoz5.face;
        poz6.style.backgroundImage = postaćPoz6.face;
        poz7.style.backgroundImage = postaćPoz7.face;
        poz8.style.backgroundImage = postaćPoz8.face;
        poz9.style.backgroundImage = postaćPoz9.face;
        poz10.style.backgroundImage = postaćPoz10.face;
        document.getElementById("selectMenu").style.display = "none";
        document.getElementById("mainGame").style.display = "block";
        cyklGry();
    }
});
//pauza
var pauzaGuz = document.getElementById("pauzaGuz");
var scenaPauzy = document.getElementById("scenaPauzy");
var wznów = document.getElementById("wznów");
pauzaGuz.addEventListener("click", () => {
  scenaPauzy.style.display = "flex";
});
wznów.addEventListener("click", () => {
  scenaPauzy.style.display = "none";
});

var testodiv = document.getElementById("testodiv");
var kwadwybierak = document.getElementById("kwadwybierak");
var testguz = document.getElementById("testguz");
var skillzestaw = document.getElementById("skillzestaw");
var energybar = document.getElementById("energybar");
var skillblock1 = document.getElementById("skillblock1");
var skillblock2 = document.getElementById("skillblock2");
var skillblock3 = document.getElementById("skillblock3");
var skillblock4 = document.getElementById("skillblock4");
var skillblock5 = document.getElementById("skillblock5");
var skillblock6 = document.getElementById("skillblock6");
var króry1 = document.getElementById("króry1");
var króry2 = document.getElementById("króry2");
var króry3 = document.getElementById("króry3");
var króry4 = document.getElementById("króry4");
var króry5 = document.getElementById("króry5");
var króry6 = document.getElementById("króry6");
var króry7 = document.getElementById("króry7");
var króry8 = document.getElementById("króry8");
var króry9 = document.getElementById("króry9");
var króry10 = document.getElementById("króry10");
var hpFill1 = document.getElementById("hpFill1");
var hpFill2 = document.getElementById("hpFill2");
var hpFill3 = document.getElementById("hpFill3");
var hpFill4 = document.getElementById("hpFill4");
var hpFill5 = document.getElementById("hpFill5");
var hpFill6 = document.getElementById("hpFill6");
var hpFill7 = document.getElementById("hpFill7");
var hpFill8 = document.getElementById("hpFill8");
var hpFill9 = document.getElementById("hpFill9");
var hpFill10 = document.getElementById("hpFill10");
var shield1 = document.getElementById("shield1");
var shield2 = document.getElementById("shield2");
var shield3 = document.getElementById("shield3");
var shield4 = document.getElementById("shield4");
var shield5 = document.getElementById("shield5");
var shield6 = document.getElementById("shield6");
var shield7 = document.getElementById("shield7");
var shield8 = document.getElementById("shield8");
var shield9 = document.getElementById("shield9");
var shield10 = document.getElementById("shield10");

var kolejność
var wybrany
var i = 0
function tura(){
    if(wybrany.couldown1 > 0){//w update ui zrób, że jeżeli couldown obecnyych ładowanych skillów jest nie zero to wtedy obrazki mają opacity na 0.5 lub obrazki z cyfrą
        wybrany.couldown1 = wybrany.couldown1 - 1;
    }
    if(wybrany.couldown2 > 0){
        wybrany.couldown2 = wybrany.couldown2 - 1;
    }
    if(wybrany.couldown3 > 0){
        wybrany.couldown3 = wybrany.couldown3 - 1;
    }
    if(wybrany.couldown4 > 0){
        wybrany.couldown4 = wybrany.couldown4 - 1;
    }
    if(wybrany.couldown5 > 0){
        wybrany.couldown5 = wybrany.couldown5 - 1;
    }
    if(wybrany.couldown6 > 0){
        wybrany.couldown6 = wybrany.couldown6 - 1;
    }
    if(wybrany.alive === true){
        wybranyIndeks = kolejność.findIndex(el => el === wybrany);
        i = wybranyIndeks + 1;
    }else{
        wybrany.alive = true;
        kolejność.push(wybrany);
        kolejność = kolejność.sort(function(a, b){return a.speed-b.speed}).reverse();
        wybranyIndeks = kolejność.findIndex(el => el === wybrany);
        i = wybranyIndeks;
        wybrany.alive = false;
        kolejność = kolejność.filter(u => u.alive);
    }
    if(i >= kolejność.length){
        i = 0;
        koniecTury();
    }
    wybrany = kolejność[i];
    if(wybrany.freeze.rounds > 0){
        wybrany.freeze.rounds = wybrany.freeze.rounds - 1;
        i = i + 1;
    }
    if(i >= kolejność.length){
        i = 0;
        koniecTury();
    }
    wybrany = kolejność[i];
    updateUI();
};

function koniecTury(){
    //tu zrób koniec gry na warunku, że postaćPoz1...postaćPoz5 nie żyją lub w drugą stronę
    for(var j = 0; j<kolejność.length; j++){
        if(kolejność[j].poison.rounds > 0){
            if(kolejność[j].shield === 0){
                kolejność[j].hp = (kolejność[j].hp - kolejność[j].poison.DOTvalue);
            }
            if(kolejność[j].shield > 0){
                kolejność[j].shield = (kolejność[j].shield - kolejność[j].poison.DOTvalue);
                if(kolejność[j].shield < 0){
                    kolejność[j].hp = kolejność[j].hp - (kolejność[j].shield * -1);
                    kolejność[j].shield = 0;
                }
            }
            if(kolejność[j].hp <= 0){
                kolejność[j].cała.style.display = "none";
                kolejność[j].alive = false;
            }
            kolejność[j].poison.rounds = kolejność[j].poison.rounds - 1;
        }
        if(kolejność[j].fire.rounds > 0){
            if(kolejność[j].shield === 0){
                kolejność[j].hp = (kolejność[j].hp - kolejność[j].fire.DOTvalue);
            }
            if(kolejność[j].shield > 0){
                kolejność[j].shield = (kolejność[j].shield - kolejność[j].fire.DOTvalue);
                if(kolejność[j].shield < 0){
                    kolejność[j].hp = kolejność[j].hp - (kolejność[j].shield * -1);
                    kolejność[j].shield = 0;
                }
            }
            if(kolejność[j].hp <= 0){
                kolejność[j].cała.style.display = "none";
                kolejność[j].alive = false;
            }
            kolejność[j].fire.rounds = kolejność[j].fire.rounds - 1;
        }
    }
    kolejność = kolejność.filter(u => u.alive);
};

kwadwybierak.addEventListener("click", () => {
    skillzestaw.style.display = "grid";
    kwadwybierak.style.display = "none";
});
energybar.addEventListener("click", () => {
    skillzestaw.style.display = "none";
    kwadwybierak.style.display = "block";
});
//użycie skillblocków
var akcja = null;
skillblock1.addEventListener("click", () => {
    if(wybrany.couldown1 === 0){
        if(wybrany.energy >= wybrany.skills.skill1.energyNeeded){
            wybrany.energy = wybrany.energy - wybrany.skills.skill1.energyNeeded;
            wybrany.couldown1 = wybrany.skills.skill1.couldown;
            akcja = kolejność[i].skills.skill1;//wyświetlanie statusów typu dota i inne
            skillzestaw.style.display = "none";
            if(akcja.type === "selfheal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;//selfy nie potrzebują multi bo zawsze będzie 1
                    };
                }else{
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfMaxHeal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5*2;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfshield"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.shield = wybrany.shield + wybrany.skills.skill1.value*2;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }else{
                    wybrany.shield = wybrany.shield + wybrany.skills.skill1.value;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfPewnyKryt"){
                wybrany.pewnyKryt = true;
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
        }else{
            wybrany.hp = wybrany.hp - 50;
            if(wybrany.hp <= 0){
                wybrany.cała.style.display = "none";
                wybrany.alive = false;
                kolejność = kolejność.filter(u => u.alive);
            }
            akcja = null;
            skillzestaw.style.display = "grid";
            tura();
        }
    }else{
        testodiv.innerHTML = "poczekasz sobie";
    }
});
skillblock2.addEventListener("click", () => {
    if(wybrany.couldown2 === 0){
        if(wybrany.energy >= wybrany.skills.skill2.energyNeeded){
            wybrany.energy = wybrany.energy - wybrany.skills.skill2.energyNeeded;
            wybrany.couldown2 = wybrany.skills.skill2.couldown;
            akcja = kolejność[i].skills.skill2;
            skillzestaw.style.display = "none";
            if(akcja.type === "selfheal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill2.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.hp = wybrany.hp + wybrany.skills.skill2.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfMaxHeal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5*2;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfshield"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.shield = wybrany.shield + wybrany.skills.skill2.value*2;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }else{
                    wybrany.shield = wybrany.shield + wybrany.skills.skill2.value;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfPewnyKryt"){
                wybrany.pewnyKryt = true;
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
        }else{
            wybrany.hp = wybrany.hp - 50;
            if(wybrany.hp <= 0){
                wybrany.cała.style.display = "none";
                wybrany.alive = false;
                kolejność = kolejność.filter(u => u.alive);
            }
            akcja = null;
            skillzestaw.style.display = "grid";
            tura();
        }
    }else{
        testodiv.innerHTML = "poczekasz sobie";
    }
});
skillblock3.addEventListener("click", () => {
    if(wybrany.couldown3 === 0){
        if(wybrany.energy >= wybrany.skills.skill3.energyNeeded){
            wybrany.energy = wybrany.energy - wybrany.skills.skill3.energyNeeded;
            wybrany.couldown3 = wybrany.skills.skill3.couldown;
            akcja = kolejność[i].skills.skill3;
            skillzestaw.style.display = "none";
            if(akcja.type === "selfheal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill3.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.hp = wybrany.hp + wybrany.skills.skill3.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfMaxHeal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5*2;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfshield"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.shield = wybrany.shield + wybrany.skills.skill3.value*2;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }else{
                    wybrany.shield = wybrany.shield + wybrany.skills.skill3.value;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfPewnyKryt"){
                wybrany.pewnyKryt = true;
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
        }else{
            wybrany.hp = wybrany.hp - 50;
            if(wybrany.hp <= 0){
                wybrany.cała.style.display = "none";
                wybrany.alive = false;
                kolejność = kolejność.filter(u => u.alive);
            }
            akcja = null;
            skillzestaw.style.display = "grid";
            tura();
        }
    }else{
        testodiv.innerHTML = "poczekasz sobie";
    }
});
skillblock4.addEventListener("click", () => {
    if(wybrany.couldown4 === 0){
        if(wybrany.energy >= wybrany.skills.skill4.energyNeeded){
            wybrany.energy = wybrany.energy - wybrany.skills.skill4.energyNeeded;
            wybrany.couldown4 = wybrany.skills.skill4.couldown;
            akcja = kolejność[i].skills.skill4;
            skillzestaw.style.display = "none";
            if(akcja.type === "selfheal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill4.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.hp = wybrany.hp + wybrany.skills.skill4.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfMaxHeal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5*2;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfshield"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.shield = wybrany.shield + wybrany.skills.skill4.value*2;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }else{
                    wybrany.shield = wybrany.shield + wybrany.skills.skill4.value;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfPewnyKryt"){
                wybrany.pewnyKryt = true;
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
        }else{
            wybrany.hp = wybrany.hp - 50;
            if(wybrany.hp <= 0){
                wybrany.cała.style.display = "none";
                wybrany.alive = false;
                kolejność = kolejność.filter(u => u.alive);
            }
            akcja = null;
            skillzestaw.style.display = "grid";
            tura();
        }
    }else{
        testodiv.innerHTML = "poczekasz sobie";
    }
});
skillblock5.addEventListener("click", () => {
    if(wybrany.couldown5 === 0){
        if(wybrany.energy >= wybrany.skills.skill5.energyNeeded){
            wybrany.energy = wybrany.energy - wybrany.skills.skill5.energyNeeded;
            wybrany.couldown5 = wybrany.skills.skill5.couldown;
            akcja = kolejność[i].skills.skill5;
            skillzestaw.style.display = "none";
            if(akcja.type === "selfheal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill5.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.hp = wybrany.hp + wybrany.skills.skill5.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfMaxHeal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5*2;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfshield"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.shield = wybrany.shield + wybrany.skills.skill5.value*2;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }else{
                    wybrany.shield = wybrany.shield + wybrany.skills.skill5.value;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfPewnyKryt"){
                wybrany.pewnyKryt = true;
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
        }else{
            wybrany.hp = wybrany.hp - 50;
            if(wybrany.hp <= 0){
                wybrany.cała.style.display = "none";
                wybrany.alive = false;
                kolejność = kolejność.filter(u => u.alive);
            }
            akcja = null;
            skillzestaw.style.display = "grid";
            tura();
        }
    }else{
        testodiv.innerHTML = "poczekasz sobie";
    }
});
skillblock6.addEventListener("click", () => {
    if(wybrany.couldown6 === 0){
        if(wybrany.energy >= wybrany.skills.skill6.energyNeeded){
            wybrany.energy = wybrany.energy - wybrany.skills.skill6.energyNeeded;
            wybrany.couldown6 = wybrany.skills.skill6.couldown;
            akcja = kolejność[i].skills.skill6;
            skillzestaw.style.display = "none";
            if(akcja.type === "selfheal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill6.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.hp = wybrany.hp + wybrany.skills.skill6.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfMaxHeal"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5*2;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value*2;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }else{
                    wybrany.maxhp = wybrany.maxhp + wybrany.skills.skill1.value*1.5;
                    wybrany.hp = wybrany.hp + wybrany.skills.skill1.value;
                    if(wybrany.hp > wybrany.maxhp){
                        wybrany.hp = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfshield"){
                if(Math.random() < 0.1 || wybrany.pewnyKryt === true){
                    wybrany.pewnyKryt = false;
                    wybrany.shield = wybrany.shield + wybrany.skills.skill6.value*2;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }else{
                    wybrany.shield = wybrany.shield + wybrany.skills.skill6.value;
                    if(wybrany.shield > wybrany.maxhp){
                        wybrany.shield = wybrany.maxhp;
                    };
                }
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
            if(akcja.type === "selfPewnyKryt"){
                wybrany.pewnyKryt = true;
                akcja = null;
                skillzestaw.style.display = "grid";
                tura();
            };
        }else{
            wybrany.hp = wybrany.hp - 50;
            if(wybrany.hp <= 0){
                wybrany.cała.style.display = "none";
                wybrany.alive = false;
                kolejność = kolejność.filter(u => u.alive);
            }
            akcja = null;
            skillzestaw.style.display = "grid";
            tura();
        }
    }else{
        testodiv.innerHTML = "poczekasz sobie";
    }
});
var całaPostać1 = document.getElementById("całaPostać1");
var całaPostać2 = document.getElementById("całaPostać2");
var całaPostać3 = document.getElementById("całaPostać3");
var całaPostać4 = document.getElementById("całaPostać4");
var całaPostać5 = document.getElementById("całaPostać5");
var całaPostać6 = document.getElementById("całaPostać6");
var całaPostać7 = document.getElementById("całaPostać7");
var całaPostać8 = document.getElementById("całaPostać8");
var całaPostać9 = document.getElementById("całaPostać9");
var całaPostać10 = document.getElementById("całaPostać10");

function cyklGry(){
    kolejność = [postaćPoz1,postaćPoz2,postaćPoz3,postaćPoz4,postaćPoz5,postaćPoz6,postaćPoz7,postaćPoz8,postaćPoz9,postaćPoz10];
    kolejność = kolejność.sort(function(a, b){return a.speed-b.speed}).reverse();
    kwadwybierak.style.top = kolejność[0].top;
    kwadwybierak.style.left = kolejność[0].left;
    skillzestaw.style.top = kolejność[0].top;
    skillzestaw.style.left = parseInt(kolejność[0].left) + 50 + "px";
    energybar.innerHTML = kolejność[0].energy;
    wybrany = kolejność[0];
    postaćPoz1.poz = poz1;
    postaćPoz2.poz = poz2;
    postaćPoz3.poz = poz3;
    postaćPoz4.poz = poz4;
    postaćPoz5.poz = poz5;
    postaćPoz6.poz = poz6;
    postaćPoz7.poz = poz7;
    postaćPoz8.poz = poz8;
    postaćPoz9.poz = poz9;
    postaćPoz10.poz = poz10;
    postaćPoz1.strona = "lewo";
    postaćPoz2.strona = "lewo";
    postaćPoz3.strona = "lewo";
    postaćPoz4.strona = "lewo";
    postaćPoz5.strona = "lewo";
    postaćPoz6.strona = "prawo";
    postaćPoz7.strona = "prawo";
    postaćPoz8.strona = "prawo";
    postaćPoz9.strona = "prawo";
    postaćPoz10.strona = "prawo";
    postaćPoz1.który = który1;
    postaćPoz2.który = który2;
    postaćPoz3.który = który3;
    postaćPoz4.który = który4;
    postaćPoz5.który = który5;
    postaćPoz6.który = który6;
    postaćPoz7.który = który7;
    postaćPoz8.który = który8;
    postaćPoz9.który = który9;
    postaćPoz10.który = który10;
    postaćPoz1.cała = całaPostać1;
    postaćPoz2.cała = całaPostać2;
    postaćPoz3.cała = całaPostać3;
    postaćPoz4.cała = całaPostać4;
    postaćPoz5.cała = całaPostać5;
    postaćPoz6.cała = całaPostać6;
    postaćPoz7.cała = całaPostać7;
    postaćPoz8.cała = całaPostać8;
    postaćPoz9.cała = całaPostać9;
    postaćPoz10.cała = całaPostać10;
    updateUI();
    var cele = [postaćPoz1, postaćPoz2, postaćPoz3, postaćPoz4, postaćPoz5, postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
    cele.forEach(cel => {
        cel.poz.addEventListener("click", () => {
            if(!akcja){return};
            if(akcja.targets.includes(cel)){
                cel.poz.style.opacity = 1;
                akcja.targets.pop(cel);
                return;
            };
            cel.poz.style.opacity = 0.5;
            akcja.targets.push(cel);
            if(akcja.targets.length === akcja.targetsNeeded || akcja.targets.length === kolejność.length){
                for(var j = 0; j<akcja.targets.length; j++){
                    multi = getMultiplier(wybrany.element, akcja.targets[j].element);
                    if(Math.random() < 0.1 || wybrany.pewnyKryt === true){//10% na kryta
                        wybrany.pewnyKryt = false;
                        if(akcja.type === "atak"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi*2));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi*2));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                        }
                        if(akcja.type === "heal"){
                            akcja.targets[j].hp = (akcja.targets[j].hp + (akcja.value*multi*2));
                            if(akcja.targets[j].hp > akcja.targets[j].maxhp){
                                akcja.targets[j].hp = akcja.targets[j].maxhp;
                            }
                        }
                        if(akcja.type === "shield"){
                            akcja.targets[j].shield = (akcja.targets[j].shield + (akcja.value*multi*2));
                            if(akcja.targets[j].shield > akcja.targets[j].maxhp){
                                akcja.targets[j].shield = akcja.targets[j].maxhp;
                            }
                        }
                        if(akcja.type === "poison"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi*2));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi*2));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            akcja.targets[j].poison.DOTvalue = akcja.targets[j].poison.DOTvalue + akcja.DOTvalue*multi*2;
                            akcja.targets[j].poison.rounds = akcja.targets[j].poison.rounds + akcja.rounds + 1;
                        }
                        if(akcja.type === "freeze"){
                            akcja.targets[j].freeze.rounds = akcja.targets[j].freeze.rounds + akcja.rounds + 1;
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi*2));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi*2));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                        }
                        if(akcja.type === "fire"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi*2));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi*2));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            akcja.targets[j].fire.DOTvalue = akcja.targets[j].fire.DOTvalue + akcja.DOTvalue*multi*2;
                            akcja.targets[j].fire.rounds = akcja.targets[j].fire.rounds + akcja.rounds + 1;
                        }
                        if(akcja.type === "pewnyKryt"){
                            akcja.targets[j].pewnyKryt = true;
                            wybrany.pewnyKryt = true;//jak siądzie kryt to efekt będzie dla wybranego gościa oraz dla rzucającego
                        }
                        if(akcja.type === "atakObszarówka"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - akcja.value*multi*2);
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - akcja.value*multi*2);
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            if(wybrany.strona === "lewo"){
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10]
                                for(var k = 0; k<listaObszaru.length; k++){
                                    multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                    if(listaObszaru[k].shield === 0){
                                        listaObszaru[k].hp = (listaObszaru[k].hp - (akcja.areaValue*multi*2));
                                    }
                                    if(listaObszaru[k].shield > 0){
                                        listaObszaru[k].shield = (listaObszaru[k].shield - (akcja.areaValue*multi*2));
                                        if(listaObszaru[k].shield < 0){
                                            listaObszaru[k].hp = listaObszaru[k].hp - (listaObszaru[k].shield * -1);
                                            listaObszaru[k].shield = 0;
                                        }
                                    }
                                    if(listaObszaru[k].hp <= 0){
                                        listaObszaru[k].cała.style.display = "none";
                                        listaObszaru[k].alive = false;
                                        kolejność = kolejność.filter(u => u.alive);
                                    }
                                }
                            }else{
                                listaObszaru = [postaćPoz1, postaćPoz2, postaćPoz3, postaćPoz4, postaćPoz5]
                                for(var k = 0; k<listaObszaru.length; k++){
                                    multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                    if(listaObszaru[k].shield === 0){
                                        listaObszaru[k].hp = (listaObszaru[k].hp - (akcja.areaValue*multi*2));
                                    }
                                    if(listaObszaru[k].shield > 0){
                                        listaObszaru[k].shield = (listaObszaru[k].shield - (akcja.areaValue*multi*2));
                                        if(listaObszaru[k].shield < 0){
                                            listaObszaru[k].hp = listaObszaru[k].hp - (listaObszaru[k].shield * -1);
                                            listaObszaru[k].shield = 0;
                                        }
                                    }
                                    if(listaObszaru[k].hp <= 0){
                                        listaObszaru[k].cała.style.display = "none";
                                        listaObszaru[k].alive = false;
                                        kolejność = kolejność.filter(u => u.alive);
                                    }
                                }
                            }
                        }
                        if(akcja.type === "healObszarówka"){
                            if(wybrany.strona === "lewo"){
                                listaObszaru = [postaćPoz1, postaćPoz2, postaćPoz3, postaćPoz4, postaćPoz5];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                    listaObszaru[k].hp = (listaObszaru[k].hp + (akcja.value*multi*2));
                                    if(listaObszaru[k].hp > listaObszaru[k].maxhp){
                                        listaObszaru[k].hp = listaObszaru[k].maxhp;
                                    }
                                }
                            }else{
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                    listaObszaru[k].hp = (listaObszaru[k].hp + (akcja.value*multi*2));
                                    if(listaObszaru[k].hp > listaObszaru[k].maxhp){
                                        listaObszaru[k].hp = listaObszaru[k].maxhp;
                                    }
                                }
                            }
                        }
                        if(akcja.type === "speedObszarówka"){
                            if(wybrany.strona === "lewo"){
                                listaObszaru = [postaćPoz1, postaćPoz2, postaćPoz3, postaćPoz4, postaćPoz5];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    listaObszaru[k].energy = listaObszaru[k].energy - akcja.value;
                                    listaObszaru[k].speed = listaObszaru[k].speed + 40;
                                }
                            }else{
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    listaObszaru[k].energy = listaObszaru[k].energy - akcja.value;
                                    listaObszaru[k].speed = listaObszaru[k].speed + 40;
                                }
                            }
                        }
                        if(akcja.type === "atak+speed"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi*2));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi*2));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            wybrany.speed = wybrany.speed + 60;
                        }
                    }else{
                        if(akcja.type === "atak"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - akcja.value*multi);
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - akcja.value*multi);
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                        }
                        if(akcja.type === "heal"){
                            akcja.targets[j].hp = (akcja.targets[j].hp + akcja.value*multi);
                            if(akcja.targets[j].hp > akcja.targets[j].maxhp){
                                akcja.targets[j].hp = akcja.targets[j].maxhp;
                            }
                        }
                        if(akcja.type === "shield"){
                            akcja.targets[j].shield = (akcja.targets[j].shield + akcja.value*multi);
                            if(akcja.targets[j].shield > akcja.targets[j].maxhp){
                                akcja.targets[j].shield = akcja.targets[j].maxhp;
                            }
                        }
                        if(akcja.type === "poison"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            akcja.targets[j].poison.DOTvalue = akcja.targets[j].poison.DOTvalue + akcja.DOTvalue*multi;
                            akcja.targets[j].poison.rounds = akcja.targets[j].poison.rounds + akcja.rounds;
                        }
                        if(akcja.type === "freeze"){
                            akcja.targets[j].freeze.rounds = akcja.targets[j].freeze.rounds + akcja.rounds;
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                        }
                        if(akcja.type === "fire"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            akcja.targets[j].fire.DOTvalue = akcja.targets[j].fire.DOTvalue + akcja.DOTvalue*multi;
                            akcja.targets[j].fire.rounds = akcja.targets[j].fire.rounds + akcja.rounds;
                        }
                        if(akcja.type === "pewnyKryt"){
                            akcja.targets[j].pewnyKryt = true;
                        }
                        if(akcja.type === "atakObszarówka"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - akcja.value*multi);
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - akcja.value*multi);
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            if(wybrany.strona === "lewo"){
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                    if(listaObszaru[k].shield === 0){
                                        listaObszaru[k].hp = (listaObszaru[k].hp - (akcja.areaValue*multi));
                                    }
                                    if(listaObszaru[k].shield > 0){
                                        listaObszaru[k].shield = (listaObszaru[k].shield - (akcja.areaValue*multi));
                                        if(listaObszaru[k].shield < 0){
                                            listaObszaru[k].hp = listaObszaru[k].hp - (listaObszaru[k].shield * -1);
                                            listaObszaru[k].shield = 0;
                                        }
                                    }
                                    if(listaObszaru[k].hp <= 0){
                                        listaObszaru[k].cała.style.display = "none";
                                        listaObszaru[k].alive = false;
                                        kolejność = kolejność.filter(u => u.alive);
                                    }
                                }
                            }else{
                                listaObszaru = [postaćPoz1, postaćPoz2, postaćPoz3, postaćPoz4, postaćPoz5];
                                multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                for(var k = 0; k<listaObszaru.length; k++){
                                    if(listaObszaru[k].shield === 0){
                                        listaObszaru[k].hp = (listaObszaru[k].hp - (akcja.areaValue*multi));
                                    }
                                    if(listaObszaru[k].shield > 0){
                                        listaObszaru[k].shield = (listaObszaru[k].shield - (akcja.areaValue*multi));
                                        if(listaObszaru[k].shield < 0){
                                            listaObszaru[k].hp = listaObszaru[k].hp - (listaObszaru[k].shield * -1);
                                            listaObszaru[k].shield = 0;
                                        }
                                    }
                                    if(listaObszaru[k].hp <= 0){
                                        listaObszaru[k].cała.style.display = "none";
                                        listaObszaru[k].alive = false;
                                        kolejność = kolejność.filter(u => u.alive);
                                    }
                                }
                            }
                        }
                        if(akcja.type === "healObszarówka"){
                            if(wybrany.strona === "lewo"){
                                listaObszaru = [postaćPoz1, postaćPoz2, postaćPoz3, postaćPoz4, postaćPoz5];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                    listaObszaru[k].hp = (listaObszaru[k].hp + (akcja.value*multi));
                                    if(listaObszaru[k].hp > listaObszaru[k].maxhp){
                                        listaObszaru[k].hp = listaObszaru[k].maxhp;
                                    }
                                }
                            }else{
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    multi = getMultiplier(wybrany.element, listaObszaru[k].element);
                                    listaObszaru[k].hp = (listaObszaru[k].hp + (akcja.value*multi));
                                    if(listaObszaru[k].hp > listaObszaru[k].maxhp){
                                        listaObszaru[k].hp = listaObszaru[k].maxhp;
                                    }
                                }
                            }
                        }
                        if(akcja.type === "speedObszarówka"){
                            if(wybrany.strona === "lewo"){
                                listaObszaru = [postaćPoz1, postaćPoz2, postaćPoz3, postaćPoz4, postaćPoz5];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    listaObszaru[k].energy = listaObszaru[k].energy - akcja.value;
                                    listaObszaru[k].speed = listaObszaru[k].speed + 20;
                                }
                            }else{
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    listaObszaru[k].energy = listaObszaru[k].energy - akcja.value;
                                    listaObszaru[k].speed = listaObszaru[k].speed + 20;
                                }
                            }
                        }
                        if(akcja.type === "atak+speed"){
                            if(akcja.targets[j].shield === 0){
                                akcja.targets[j].hp = (akcja.targets[j].hp - (akcja.value*multi));
                            }
                            if(akcja.targets[j].shield > 0){
                                akcja.targets[j].shield = (akcja.targets[j].shield - (akcja.value*multi));
                                if(akcja.targets[j].shield < 0){
                                    akcja.targets[j].hp = akcja.targets[j].hp - (akcja.targets[j].shield * -1);
                                    akcja.targets[j].shield = 0;
                                }
                            }
                            if(akcja.targets[j].hp <= 0){
                                akcja.targets[j].cała.style.display = "none";
                                akcja.targets[j].alive = false;
                                kolejność = kolejność.filter(u => u.alive);
                            }
                            wybrany.speed = wybrany.speed + 30;
                        }
                    }

                }
                kwadwybierak.style.display = "block";
                akcja.targets = [];
                akcja = null;
                poz1.style.opacity = 1;
                poz2.style.opacity = 1;
                poz3.style.opacity = 1;
                poz4.style.opacity = 1;
                poz5.style.opacity = 1;
                poz6.style.opacity = 1;
                poz7.style.opacity = 1;
                poz8.style.opacity = 1;
                poz9.style.opacity = 1;
                poz10.style.opacity = 1;
                tura();
            };
        });
    });
};

var efekt11 = document.getElementById("efekt11");
var efekt12 = document.getElementById("efekt12");
var efekt13 = document.getElementById("efekt13");
var efekt14 = document.getElementById("efekt14");
var efekt21 = document.getElementById("efekt21");
var efekt22 = document.getElementById("efekt22");
var efekt23 = document.getElementById("efekt23");
var efekt24 = document.getElementById("efekt24");
var efekt31 = document.getElementById("efekt31");
var efekt32 = document.getElementById("efekt32");
var efekt33 = document.getElementById("efekt33");
var efekt34 = document.getElementById("efekt34");
var efekt41 = document.getElementById("efekt41");
var efekt42 = document.getElementById("efekt42");
var efekt43 = document.getElementById("efekt43");
var efekt44 = document.getElementById("efekt44");
var efekt51 = document.getElementById("efekt51");
var efekt52 = document.getElementById("efekt52");
var efekt53 = document.getElementById("efekt53");
var efekt54 = document.getElementById("efekt54");
var efekt61 = document.getElementById("efekt61");
var efekt62 = document.getElementById("efekt62");
var efekt63 = document.getElementById("efekt63");
var efekt64 = document.getElementById("efekt64");
var efekt71 = document.getElementById("efekt71");
var efekt72 = document.getElementById("efekt72");
var efekt73 = document.getElementById("efekt73");
var efekt74 = document.getElementById("efekt74");
var efekt81 = document.getElementById("efekt81");
var efekt82 = document.getElementById("efekt82");
var efekt83 = document.getElementById("efekt83");
var efekt84 = document.getElementById("efekt84");
var efekt91 = document.getElementById("efekt91");
var efekt92 = document.getElementById("efekt92");
var efekt93 = document.getElementById("efekt93");
var efekt94 = document.getElementById("efekt94");
var efekt101 = document.getElementById("efekt101");
var efekt102 = document.getElementById("efekt102");
var efekt103 = document.getElementById("efekt103");
var efekt104 = document.getElementById("efekt104");

function updateUI(){
    hpFill1.style.width = `${(postaćPoz1.hp / postaćPoz1.maxhp) * 100}%`;
    hpFill2.style.width = `${(postaćPoz2.hp / postaćPoz2.maxhp) * 100}%`;
    hpFill3.style.width = `${(postaćPoz3.hp / postaćPoz3.maxhp) * 100}%`;
    hpFill4.style.width = `${(postaćPoz4.hp / postaćPoz4.maxhp) * 100}%`;
    hpFill5.style.width = `${(postaćPoz5.hp / postaćPoz5.maxhp) * 100}%`;
    hpFill6.style.width = `${(postaćPoz6.hp / postaćPoz6.maxhp) * 100}%`;
    hpFill7.style.width = `${(postaćPoz7.hp / postaćPoz7.maxhp) * 100}%`;
    hpFill8.style.width = `${(postaćPoz8.hp / postaćPoz8.maxhp) * 100}%`;
    hpFill9.style.width = `${(postaćPoz9.hp / postaćPoz9.maxhp) * 100}%`;
    hpFill10.style.width = `${(postaćPoz10.hp / postaćPoz10.maxhp) * 100}%`;
    shield1.style.width = `${(postaćPoz1.shield / postaćPoz1.maxhp) * 100}%`;
    shield2.style.width = `${(postaćPoz2.shield / postaćPoz2.maxhp) * 100}%`;
    shield3.style.width = `${(postaćPoz3.shield / postaćPoz3.maxhp) * 100}%`;
    shield4.style.width = `${(postaćPoz4.shield / postaćPoz4.maxhp) * 100}%`;
    shield5.style.width = `${(postaćPoz5.shield / postaćPoz5.maxhp) * 100}%`;
    shield6.style.width = `${(postaćPoz6.shield / postaćPoz6.maxhp) * 100}%`;
    shield7.style.width = `${(postaćPoz7.shield / postaćPoz7.maxhp) * 100}%`;
    shield8.style.width = `${(postaćPoz8.shield / postaćPoz8.maxhp) * 100}%`;
    shield9.style.width = `${(postaćPoz9.shield / postaćPoz9.maxhp) * 100}%`;
    shield10.style.width = `${(postaćPoz10.shield / postaćPoz10.maxhp) * 100}%`;
    efekt11.textContent = postaćPoz1.poison.rounds;
    efekt12.textContent = postaćPoz1.freeze.rounds;
    efekt13.textContent = postaćPoz1.fire.rounds;//zrób na obrazek na pasku, a po najechaniu pisze ile i na jak długo
    efekt14.textContent = postaćPoz1.pewnyKryt;
    kolejność = kolejność.sort(function(a, b){return a.speed-b.speed}).reverse();//monitoruj tutaj
    for(var j = 0; j<kolejność.length; j++){
        kolejność[j].który.innerHTML = j+1;//to wszystko niżej jest po to, żeby za każdym razem wyświetliło dobrze skille i kolejność w cyfrach
    }
    kwadwybierak.style.top = kolejność[i].top;
    kwadwybierak.style.left = kolejność[i].left;
    skillzestaw.style.top = kolejność[i].top;
    skillzestaw.style.left = parseInt(kolejność[i].left) + 50 + "px";
    energybar.innerHTML = kolejność[i].energy;
    if(kolejność[i].skills.skill1 == null){
        skillblock1.style.display = "none";
    }else{
        skillblock1.style.display = "block";
    }
    if(kolejność[i].skills.skill2 == null){
        skillblock2.style.display = "none";
    }else{
        skillblock2.style.display = "block";
    }
    if(kolejność[i].skills.skill3 == null){
        skillblock3.style.display = "none";
    }else{
        skillblock3.style.display = "block";
    }
    if(kolejność[i].skills.skill4 == null){
        skillblock4.style.display = "none";
    }else{
        skillblock4.style.display = "block";
    }
    if(kolejność[i].skills.skill5 == null){
        skillblock5.style.display = "none";
    }else{
        skillblock5.style.display = "block";
    }
    if(kolejność[i].skills.skill6 == null){
        skillblock6.style.display = "none";
    }else{
        skillblock6.style.display = "block";
    }
}