var StevenUniverse = {
    nazwa:"steven",//następnie zrób konkretne skille, daj im energię, zrób couldowny oraz może ukwadrać trochę paski życia, bo słabo to wygląda
    maxhp:1000,
    hp:1000,
    shield:0,
    speed:100, 
    energy:100,
    alive:true,
    element:["normal"],
    face:"url('images/characters/StevenUniverse.png')",
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
            face: "url('images/skill_icon/rockSkin.png')",
            type: "atak",
            targetsNeeded: 2,//może kiedyś 1 i rykoszet
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill2: {
            nazwa: "Regeneracja",
            face: "url('images/skill_icon/holyLight.png')",
            type: "selfheal",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill3: {
            nazwa: "Bańka",
            face: "url('images/skill_icon/iceShield.png')",
            type: "selfshield",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill4: {
            nazwa: "Lecznicza ślina",
            face: "url('images/skill_icon/hope.png')",
            type: "heal",
            targetsNeeded: 2,
            targets: [],
            value: 250,
            energyNeeded: 50,
            couldown:2
        },
        skill5: {
            nazwa: "Osłona",
            face: "url('images/skill_icon/iceBarrier.png')",
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
    face:"url('images/characters/Granat.png')",
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
            face: "url('images/skill_icon/fireBash.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Gniew Szafir",
            face: "url('images/skill_icon/icyBlast.png')",
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
            face: "url('images/skill_icon/fireBlast.png')",
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
            face: "url('images/skill_icon/iceShield.png')",
            type: "selfshield",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill5:{
            nazwa: "Przyszły cios",
            face: "url('images/skill_icon/persaverance.png')",
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
    face:"url('images/characters/Ametyst.png')",
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
            face: "url('images/skill_icon/righteousFate.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Naładowany bicz",
            face: "url('images/skill_icon/batchBolt.png')",
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
            face: "url('images/skill_icon/recklessDash.png')",
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
    face:"url('images/characters/Perła.png')",
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
            face: "url('images/skill_icon/wildLance.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Wiązka energii",
            face: "url('images/skill_icon/penance.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Holo-perła",//wstawia holoperły wszędzie gdzie ktoś zginął, nowe kolejki, nie możesz wygrać mając same holoperły
            face: "url('images/skill_icon/holyLight.png')",
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
    face:"url('images/characters/Perła.png')",
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
    face:"url('images/characters/Greg.png')",
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
            face: "url('images/skill_icon/oreDrill.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 100,
            energyNeeded: 0,//dużo energii zużyje na pozostałe a zwykły atak będzie miał w gratisie
            couldown:1
        },
        skill2:{
            nazwa: "Hard Rock",
            face: "url('images/skill_icon/stun.png')",
            type: "freeze",//zamień to na stun, bo obrazek będzie lodowy
            targetsNeeded: 2,
            targets: [],
            value: 0,
            rounds: 1,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Ambient ukulele",
            face: "url('images/skill_icon/serenity.png')",
            type: "healObszarówka",
            targetsNeeded: 1,//trzeba raz kliknąć, nie unikniesz
            targets: [],
            value: 100,
            energyNeeded: 50,
            couldown:2
        },
        skill4:{
            nazwa: "Wild Country",
            face: "url('images/skill_icon/agility.png')",
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
    face:"url('images/characters/Connie.png')",
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
            face: "url('images/skill_icon/grassBlade.png')",
            type: "atak",
            targetsNeeded: 2,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Precyzyjny atak",
            face: "url('images/skill_icon/crusade.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 400,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Idealny moment",
            face: "url('images/skill_icon/persaverance.png')",
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
    face:"url('images/characters/Lapis.png')",
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
            face: "url('images/skill_icon/refreshingWave.png')",
            type: "atak",
            targetsNeeded: 3,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Śnieżyca",
            face: "url('images/skill_icon/sleet.png')",
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
            face: "url('images/skill_icon/waterJet.png')",
            type: "atak+speed",
            targetsNeeded: 1,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill4:{
            nazwa: "Hydromimik",
            face: "url('images/skill_icon/holyLight.png')",
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
    face:"url('images/characters/Perła.png')",
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
    face:"url('images/characters/Perydot.png')",
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
            face: "url('images/skill_icon/deathCall.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Naprawa",
            face: "url('images/skill_icon/metalMold.png')",
            type: "selfMaxHeal",
            targetsNeeded: 1,
            targets: [],
            value: 200,
            energyNeeded: 50,
            couldown:2
        },
        skill3:{
            nazwa: "Granat energetyczny",
            face: "url('images/skill_icon/overload.png')",
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
            face: "url('images/skill_icon/metalShield.png')",
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
    face:"url('images/characters/Jaspis.png')",
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
            face: "url('images/skill_icon/piercingCharge.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 350,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Naładowana kometa",
            face: "url('images/skill_icon/meteorStrike.png')",
            type: "atak",
            targetsNeeded: 1,
            targets: [],
            value: 600,
            energyNeeded: 50,
            couldown:3
        },
        skill3:{
            nazwa: "Opancerzenie",
            face: "url('images/skill_icon/platinum.png')",
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
    face:"url('images/characters/Bizmut.png')",
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
            face: "url('images/skill_icon/titanSlam.png')",
            type: "atak",
            targetsNeeded: 2,
            targets: [],
            value: 300,
            energyNeeded: 50,
            couldown:2
        },
        skill2:{
            nazwa: "Ulepszenie ekwipunku",
            face: "url('images/skill_icon/persaverance.png')",
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
character1.style.backgroundImage = 'url("images/character_icon/steven.png")';
var character2 = document.getElementById("character2");
character2.style.backgroundImage = 'url("images/character_icon/granat.png")';
var character3 = document.getElementById("character3");
character3.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
var character4 = document.getElementById("character4");
character4.style.backgroundImage = 'url("images/character_icon/perła.png")';
var character5 = document.getElementById("character5");
character5.style.backgroundImage = 'url("images/character_icon/greg.png")';
var character6 = document.getElementById("character6");
character6.style.backgroundImage = 'url("images/character_icon/connie.png")';
var character7 = document.getElementById("character7");
character7.style.backgroundImage = 'url("images/character_icon/lapis.png")';
var character8 = document.getElementById("character8");
character8.style.backgroundImage = 'url("images/character_icon/perydot.png")';
var character9 = document.getElementById("character9");
character9.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
var character10 = document.getElementById("character10");
character10.style.backgroundImage = 'url("images/character_icon/bizmut.png")';

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
    if(character1.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "1";
        character1.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz1 = StevenUniverse;
        postaćPoz1.top = getComputedStyle(poz1).top; //getComputedStyle bierze wszystko, czyli 100px
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "1";
        character1.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz2 = StevenUniverse;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "1";
        character1.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz3 = StevenUniverse;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "1";
        character1.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz4 = StevenUniverse;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "1";
        character1.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz5 = StevenUniverse;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "1";
        character1.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz6 = StevenUniverse;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "1";
        character1.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz7 = StevenUniverse;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "1";
        character1.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz8 = StevenUniverse;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "1";
        character1.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz9 = StevenUniverse;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "1";
        character1.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/steven.png")';
        postaćPoz10 = StevenUniverse;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character2.addEventListener("click",() => {
    if(character2.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "2";
        character2.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz1 = Granat;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "2";
        character2.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz2 = Granat;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "2";
        character2.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz3 = Granat;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "2";
        character2.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz4 = Granat;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "2";
        character2.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz5 = Granat;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "2";
        character2.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz6 = Granat;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "2";
        character2.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz7 = Granat;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "2";
        character2.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz8 = Granat;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "2";
        character2.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz9 = Granat;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "2";
        character2.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/granat.png")';
        postaćPoz10 = Granat;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character3.addEventListener("click",() => {
    if(character3.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "3";
        character3.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz1 = Ametyst;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "3";
        character3.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz2 = Ametyst;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "3";
        character3.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz3 = Ametyst;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "3";
        character3.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz4 = Ametyst;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "3";
        character3.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz5 = Ametyst;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "3";
        character3.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz6 = Ametyst;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "3";
        character3.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz7 = Ametyst;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "3";
        character3.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz8 = Ametyst;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "3";
        character3.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz9 = Ametyst;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "3";
        character3.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/ametyst.png")';
        postaćPoz10 = Ametyst;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character4.addEventListener("click",() => {
    if(character4.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "4";
        character4.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz1 = Perła;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "4";
        character4.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz2 = Perła;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "4";
        character4.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz3 = Perła;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "4";
        character4.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz4 = Perła;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "4";
        character4.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz5 = Perła;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "4";
        character4.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz6 = Perła;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "4";
        character4.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz7 = Perła;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "4";
        character4.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz8 = Perła;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "4";
        character4.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz9 = Perła;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "4";
        character4.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/perła.png")';
        postaćPoz10 = Perła;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character5.addEventListener("click",() => {
    if(character5.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "5";
        character5.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz1 = Greg;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "5";
        character5.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz2 = Greg;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "5";
        character5.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz3 = Greg;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "5";
        character5.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz4 = Greg;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "5";
        character5.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz5 = Greg;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "5";
        character5.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz6 = Greg;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "5";
        character5.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz7 = Greg;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "5";
        character5.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz8 = Greg;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "5";
        character5.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz9 = Greg;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "5";
        character5.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/greg.png")';
        postaćPoz10 = Greg;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character6.addEventListener("click",() => {
    if(character6.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "6";
        character6.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz1 = Connie;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "6";
        character6.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz2 = Connie;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "6";
        character6.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz3 = Connie;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "6";
        character6.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz4 = Connie;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "6";
        character6.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz5 = Connie;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "6";
        character6.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz6 = Connie;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "6";
        character1.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz7 = Connie;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "6";
        character6.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz8 = Connie;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "6";
        character6.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz9 = Connie;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "6";
        character6.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/connie.png")';
        postaćPoz10 = Connie;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character7.addEventListener("click",() => {
    if(character7.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "7";
        character7.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz1 = Lapis;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "7";
        character7.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz2 = Lapis;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "7";
        character7.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz3 = Lapis;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "7";
        character7.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz4 = Lapis;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "7";
        character7.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz5 = Lapis;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "7";
        character7.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz6 = Lapis;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "7";
        character7.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz7 = Lapis;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "7";
        character7.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz8 = Lapis;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "7";
        character7.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz9 = Lapis;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "7";
        character7.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/lapis.png")';
        postaćPoz10 = Lapis;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character8.addEventListener("click",() => {
    if(character8.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "8";
        character8.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz1 = Perydot;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "8";
        character8.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz2 = Perydot;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "8";
        character8.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz3 = Perydot;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "8";
        character8.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz4 = Perydot;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "8";
        character8.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz5 = Perydot;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "8";
        character8.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz6 = Perydot;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "8";
        character8.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz7 = Perydot;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "8";
        character8.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz8 = Perydot;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "8";
        character8.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz9 = Perydot;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "8";
        character8.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/perydot.png")';
        postaćPoz10 = Perydot;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character9.addEventListener("click",() => {
    if(character9.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "9";
        character9.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz1 = Jaspis;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "9";
        character9.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz2 = Jaspis;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "9";
        character9.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz3 = Jaspis;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "9";
        character9.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz4 = Jaspis;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "9";
        character9.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz5 = Jaspis;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "9";
        character9.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz6 = Jaspis;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "9";
        character9.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz7 = Jaspis;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "9";
        character9.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz8 = Jaspis;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "9";
        character9.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz9 = Jaspis;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "9";
        character9.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/jaspis.png")';
        postaćPoz10 = Jaspis;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
character10.addEventListener("click",() => {
    if(character10.value === "1"){
        return;
    }
    if(charSelect1.value === "0"){
        charSelect1.value = "10";
        character10.value = "1";
        charSelect1.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz1 = Bizmut;
        postaćPoz1.top = getComputedStyle(poz1).top;
        postaćPoz1.left = getComputedStyle(poz1).left;
    }else if(charSelect2.value === "0"){
        charSelect2.value = "10";
        character10.value = "1";
        charSelect2.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz2 = Bizmut;
        postaćPoz2.top = getComputedStyle(poz2).top;
        postaćPoz2.left = getComputedStyle(poz2).left;
    }else if(charSelect3.value === "0"){
        charSelect3.value = "10";
        character10.value = "1";
        charSelect3.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz3 = Bizmut;
        postaćPoz3.top = getComputedStyle(poz3).top;
        postaćPoz3.left = getComputedStyle(poz3).left;
    }else if(charSelect4.value === "0"){
        charSelect4.value = "10";
        character10.value = "1";
        charSelect4.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz4 = Bizmut;
        postaćPoz4.top = getComputedStyle(poz4).top;
        postaćPoz4.left = getComputedStyle(poz4).left;
    }else if(charSelect5.value === "0"){
        charSelect5.value = "10";
        character10.value = "1";
        charSelect5.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz5 = Bizmut;
        postaćPoz5.top = getComputedStyle(poz5).top;
        postaćPoz5.left = getComputedStyle(poz5).left;
    }else if(charSelect6.value === "0"){
        charSelect6.value = "10";
        character10.value = "1";
        charSelect6.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz6 = Bizmut;
        postaćPoz6.top = getComputedStyle(poz6).top;
        postaćPoz6.left = getComputedStyle(poz6).left;
    }else if(charSelect7.value === "0"){
        charSelect7.value = "10";
        character10.value = "1";
        charSelect7.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz7 = Bizmut;
        postaćPoz7.top = getComputedStyle(poz7).top;
        postaćPoz7.left = getComputedStyle(poz7).left;
    }else if(charSelect8.value === "0"){
        charSelect8.value = "10";
        character10.value = "1";
        charSelect8.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz8 = Bizmut;
        postaćPoz8.top = getComputedStyle(poz8).top;
        postaćPoz8.left = getComputedStyle(poz8).left;
    }else if(charSelect9.value === "0"){
        charSelect9.value = "10";
        character10.value = "1";
        charSelect9.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz9 = Bizmut;
        postaćPoz9.top = getComputedStyle(poz9).top;
        postaćPoz9.left = getComputedStyle(poz9).left;
    }else if(charSelect10.value === "0"){
        charSelect10.value = "10";
        character10.value = "1";
        charSelect10.style.backgroundImage = 'url("images/character_icon/bizmut.png")';
        postaćPoz10 = Bizmut;
        postaćPoz10.top = getComputedStyle(poz10).top;
        postaćPoz10.left = getComputedStyle(poz10).left;
    }
});
//cofnięcie postaci
charSelect1.addEventListener("click", () => {
    window[`character${charSelect1.value}`].value = "0";//window to jakby obiekt globalny, ale działa tak samo jak document.getElement
    charSelect1.value = "0";
    charSelect1.style.backgroundImage = "";
});
charSelect2.addEventListener("click", () => {
    window[`character${charSelect2.value}`].value = "0";
    charSelect2.value = "0";
    charSelect2.style.backgroundImage = "";
});
charSelect3.addEventListener("click", () => {
    window[`character${charSelect3.value}`].value = "0";
    charSelect3.value = "0";
    charSelect3.style.backgroundImage = "";
});
charSelect4.addEventListener("click", () => {
    window[`character${charSelect4.value}`].value = "0";
    charSelect4.value = "0";
    charSelect4.style.backgroundImage = "";
});
charSelect5.addEventListener("click", () => {
    window[`character${charSelect5.value}`].value = "0";
    charSelect5.value = "0";
    charSelect5.style.backgroundImage = "";
});
charSelect6.addEventListener("click", () => {
    window[`character${charSelect6.value}`].value = "0";
    charSelect6.value = "0";
    charSelect6.style.backgroundImage = "";
});
charSelect7.addEventListener("click", () => {
    window[`character${charSelect7.value}`].value = "0";
    charSelect7.value = "0";
    charSelect7.style.backgroundImage = "";
});
charSelect8.addEventListener("click", () => {
    window[`character${charSelect8.value}`].value = "0";
    charSelect8.value = "0";
    charSelect8.style.backgroundImage = "";
});
charSelect9.addEventListener("click", () => {
    window[`character${charSelect9.value}`].value = "0";
    charSelect9.value = "0";
    charSelect9.style.backgroundImage = "";
});
charSelect10.addEventListener("click", () => {
    window[`character${charSelect10.value}`].value = "0";
    charSelect10.value = "0";
    charSelect10.style.backgroundImage = "";
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
    if(wybrany.couldown1 > 0){
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
    while(wybrany.freeze.rounds > 0){
        wybrany.freeze.rounds = wybrany.freeze.rounds - 1;
        i = i + 1;
        if(i >= kolejność.length){
            i = 0;
            koniecTury();
        }
        wybrany = kolejność[i];
    }
    updateUI();
};

function koniecTury(){
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
            akcja = kolejność[i].skills.skill1;
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
                                    listaObszaru[k].speed = listaObszaru[k].speed + 36;
                                }
                            }else{
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    listaObszaru[k].energy = listaObszaru[k].energy - akcja.value;
                                    listaObszaru[k].speed = listaObszaru[k].speed + 36;
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
                            wybrany.speed = wybrany.speed + 36;
                        }
                    }else{//góra to kryt, a dół bezkryt
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
                                    listaObszaru[k].speed = listaObszaru[k].speed + 18;
                                }
                            }else{
                                listaObszaru = [postaćPoz6, postaćPoz7, postaćPoz8, postaćPoz9, postaćPoz10];
                                for(var k = 0; k<listaObszaru.length; k++){
                                    listaObszaru[k].energy = listaObszaru[k].energy - akcja.value;
                                    listaObszaru[k].speed = listaObszaru[k].speed + 18;
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
                            wybrany.speed = wybrany.speed + 18;
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
    shield9.style.width = `${(postaćPoz9.shield / postaćPoz9.maxhp) * 100}%`;//napraw prędkość, w sensie że nie może być taka sama bo się pierdoli
    shield10.style.width = `${(postaćPoz10.shield / postaćPoz10.maxhp) * 100}%`;
    if(postaćPoz1.poison.rounds == 0 && postaćPoz1.freeze.rounds == 0 && postaćPoz1.fire.rounds == 0 && postaćPoz1.pewnyKryt == false){efektInfo1.style.display = "none"}else{efektInfo1.style.display = "flex"}
    if(postaćPoz2.poison.rounds == 0 && postaćPoz2.freeze.rounds == 0 && postaćPoz2.fire.rounds == 0 && postaćPoz2.pewnyKryt == false){efektInfo2.style.display = "none"}else{efektInfo2.style.display = "flex"}
    if(postaćPoz3.poison.rounds == 0 && postaćPoz3.freeze.rounds == 0 && postaćPoz3.fire.rounds == 0 && postaćPoz3.pewnyKryt == false){efektInfo3.style.display = "none"}else{efektInfo3.style.display = "flex"}
    if(postaćPoz4.poison.rounds == 0 && postaćPoz4.freeze.rounds == 0 && postaćPoz4.fire.rounds == 0 && postaćPoz4.pewnyKryt == false){efektInfo4.style.display = "none"}else{efektInfo4.style.display = "flex"}
    if(postaćPoz5.poison.rounds == 0 && postaćPoz5.freeze.rounds == 0 && postaćPoz5.fire.rounds == 0 && postaćPoz5.pewnyKryt == false){efektInfo5.style.display = "none"}else{efektInfo5.style.display = "flex"}
    if(postaćPoz6.poison.rounds == 0 && postaćPoz6.freeze.rounds == 0 && postaćPoz6.fire.rounds == 0 && postaćPoz6.pewnyKryt == false){efektInfo6.style.display = "none"}else{efektInfo6.style.display = "flex"}
    if(postaćPoz7.poison.rounds == 0 && postaćPoz7.freeze.rounds == 0 && postaćPoz7.fire.rounds == 0 && postaćPoz7.pewnyKryt == false){efektInfo7.style.display = "none"}else{efektInfo7.style.display = "flex"}
    if(postaćPoz8.poison.rounds == 0 && postaćPoz8.freeze.rounds == 0 && postaćPoz8.fire.rounds == 0 && postaćPoz8.pewnyKryt == false){efektInfo8.style.display = "none"}else{efektInfo8.style.display = "flex"}
    if(postaćPoz9.poison.rounds == 0 && postaćPoz9.freeze.rounds == 0 && postaćPoz9.fire.rounds == 0 && postaćPoz9.pewnyKryt == false){efektInfo9.style.display = "none"}else{efektInfo9.style.display = "flex"}
    if(postaćPoz10.poison.rounds == 0 && postaćPoz10.freeze.rounds == 0 && postaćPoz10.fire.rounds == 0 && postaćPoz10.pewnyKryt == false){efektInfo10.style.display = "none"}else{efektInfo10.style.display = "flex"}
    if (postaćPoz1.poison.rounds == 0) { efekt11.style.display = 'none'; } else { efekt11.style.display = 'flex'; efekt11.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz1.freeze.rounds == 0) { efekt12.style.display = 'none'; } else { efekt12.style.display = 'flex'; efekt12.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz1.fire.rounds == 0) { efekt13.style.display = 'none'; } else { efekt13.style.display = 'flex'; efekt13.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz1.pewnyKryt == false) { efekt14.style.display = 'none'; } else { efekt14.style.display = 'flex'; efekt14.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz2.poison.rounds == 0) { efekt21.style.display = 'none'; } else { efekt21.style.display = 'flex'; efekt21.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz2.freeze.rounds == 0) { efekt22.style.display = 'none'; } else { efekt22.style.display = 'flex'; efekt22.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz2.fire.rounds == 0) { efekt23.style.display = 'none'; } else { efekt23.style.display = 'flex'; efekt23.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz2.pewnyKryt == false) { efekt24.style.display = 'none'; } else { efekt24.style.display = 'flex'; efekt24.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz3.poison.rounds == 0) { efekt31.style.display = 'none'; } else { efekt31.style.display = 'flex'; efekt31.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz3.freeze.rounds == 0) { efekt32.style.display = 'none'; } else { efekt32.style.display = 'flex'; efekt32.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz3.fire.rounds == 0) { efekt33.style.display = 'none'; } else { efekt33.style.display = 'flex'; efekt33.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz3.pewnyKryt == false) { efekt34.style.display = 'none'; } else { efekt34.style.display = 'flex'; efekt34.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz4.poison.rounds == 0) { efekt41.style.display = 'none'; } else { efekt41.style.display = 'flex'; efekt41.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz4.freeze.rounds == 0) { efekt42.style.display = 'none'; } else { efekt42.style.display = 'flex'; efekt42.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz4.fire.rounds == 0) { efekt43.style.display = 'none'; } else { efekt43.style.display = 'flex'; efekt43.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz4.pewnyKryt == false) { efekt44.style.display = 'none'; } else { efekt44.style.display = 'flex'; efekt44.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz5.poison.rounds == 0) { efekt51.style.display = 'none'; } else { efekt51.style.display = 'flex'; efekt51.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz5.freeze.rounds == 0) { efekt52.style.display = 'none'; } else { efekt52.style.display = 'flex'; efekt52.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz5.fire.rounds == 0) { efekt53.style.display = 'none'; } else { efekt53.style.display = 'flex'; efekt53.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz5.pewnyKryt == false) { efekt54.style.display = 'none'; } else { efekt54.style.display = 'flex'; efekt54.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz6.poison.rounds == 0) { efekt61.style.display = 'none'; } else { efekt61.style.display = 'flex'; efekt61.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz6.freeze.rounds == 0) { efekt62.style.display = 'none'; } else { efekt62.style.display = 'flex'; efekt62.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz6.fire.rounds == 0) { efekt63.style.display = 'none'; } else { efekt63.style.display = 'flex'; efekt63.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz6.pewnyKryt == false) { efekt64.style.display = 'none'; } else { efekt64.style.display = 'flex'; efekt64.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz7.poison.rounds == 0) { efekt71.style.display = 'none'; } else { efekt71.style.display = 'flex'; efekt71.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz7.freeze.rounds == 0) { efekt72.style.display = 'none'; } else { efekt72.style.display = 'flex'; efekt72.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz7.fire.rounds == 0) { efekt73.style.display = 'none'; } else { efekt73.style.display = 'flex'; efekt73.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz7.pewnyKryt == false) { efekt74.style.display = 'none'; } else { efekt74.style.display = 'flex'; efekt74.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz8.poison.rounds == 0) { efekt81.style.display = 'none'; } else { efekt81.style.display = 'flex'; efekt81.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz8.freeze.rounds == 0) { efekt82.style.display = 'none'; } else { efekt82.style.display = 'flex'; efekt82.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz8.fire.rounds == 0) { efekt83.style.display = 'none'; } else { efekt83.style.display = 'flex'; efekt83.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz8.pewnyKryt == false) { efekt84.style.display = 'none'; } else { efekt84.style.display = 'flex'; efekt84.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz9.poison.rounds == 0) { efekt91.style.display = 'none'; } else { efekt91.style.display = 'flex'; efekt91.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz9.freeze.rounds == 0) { efekt92.style.display = 'none'; } else { efekt92.style.display = 'flex'; efekt92.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz9.fire.rounds == 0) { efekt93.style.display = 'none'; } else { efekt93.style.display = 'flex'; efekt93.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz9.pewnyKryt == false) { efekt94.style.display = 'none'; } else { efekt94.style.display = 'flex'; efekt94.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
    if (postaćPoz10.poison.rounds == 0) { efekt101.style.display = 'none'; } else { efekt101.style.display = 'flex'; efekt101.style.backgroundImage = 'url("images/skill_icon/poisonTooth.png")'; }
    if (postaćPoz10.freeze.rounds == 0) { efekt102.style.display = 'none'; } else { efekt102.style.display = 'flex'; efekt102.style.backgroundImage = 'url("images/skill_icon/icyBlast.png")'; }
    if (postaćPoz10.fire.rounds == 0) { efekt103.style.display = 'none'; } else { efekt103.style.display = 'flex'; efekt103.style.backgroundImage = 'url("images/skill_icon/burn.png")'; }
    if (postaćPoz10.pewnyKryt == false) { efekt104.style.display = 'none'; } else { efekt104.style.display = 'flex'; efekt104.style.backgroundImage = 'url("images/skill_icon/persaverance.png")'; }
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
        skillblock1.style.backgroundImage = kolejność[i].skills.skill1.face;
    }
    if(kolejność[i].skills.skill2 == null){
        skillblock2.style.display = "none";
    }else{
        skillblock2.style.display = "block";
        skillblock2.style.backgroundImage = kolejność[i].skills.skill2.face;
    }
    if(kolejność[i].skills.skill3 == null){
        skillblock3.style.display = "none";
    }else{
        skillblock3.style.display = "block";
        skillblock3.style.backgroundImage = kolejność[i].skills.skill3.face;
    }
    if(kolejność[i].skills.skill4 == null){
        skillblock4.style.display = "none";
    }else{
        skillblock4.style.display = "block";
        skillblock4.style.backgroundImage = kolejność[i].skills.skill4.face;
    }
    if(kolejność[i].skills.skill5 == null){
        skillblock5.style.display = "none";
    }else{
        skillblock5.style.display = "block";
        skillblock5.style.backgroundImage = kolejność[i].skills.skill5.face;
    }
    if(kolejność[i].skills.skill6 == null){
        skillblock6.style.display = "none";
    }else{
        skillblock6.style.display = "block";
        skillblock6.style.backgroundImage = kolejność[i].skills.skill6.face;
    }
}