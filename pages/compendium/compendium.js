// !!!! As of the first push !!!!
// !!!! Gunmetal and Eve Unit 2 have no description !!!!
// !!!! Kiriiko and Zyphos have no moves !!!!

// Shows whether an info box is open or not
let openState=false;

// Assigns functions/click events to buttons
function assignEvents() {
    document.getElementById("closeInfo").addEventListener("click",controlState)
}

// Creates the buttons to show info about Kodials
function makeButtons() {
    // List of all kodial names
    let kodials=["Shadowcore 01","Steam Titan","Capybarot","Punnky","Iris","Clockstar","Electron","A1PHA","Erodaki","Gunmetal","Voltsune","Viper & Fang","Kiriiko","Zyphos","Schwerer Kaiser","S.A.T","Eve Unit 2"]
    // Creates the buttons that the user can click
    for (let i=0;i<kodials.length;i++) {
        const kButton=document.createElement("button");
        kButton.textContent=kodials[i];
        kButton.className="openInfo";
        kButton.id=kodials[i];
        kButton.addEventListener("click",controlState)
        document.getElementById("buttonArea").appendChild(kButton)
    }
}

// Determines what to do with a Kodial info box based on its current state
function controlState() {
    // Variables related a click of an info button
    let cover=document.getElementById("cover");
    let infoBox=document.getElementById("info");
    let contentBox=document.getElementById("mainContent");
    let nameClicked=this.textContent;

    // The object that holds the stats of all the different Kodials
    let kodialStats={
        "Shadowcore 01":{atk:80,def:40,spd:60,hp:40,img:"",moves:"Shadow Burst.exe",desc:"One of the most advanced series of Kodials, the C0RE series, was made for precision and strength, each model stronger and faster than the last. This was the first of the C0RE series, not even given a proper name, yet is seemingly fully functional? The unknown energy emanating from it must be simply leftover power. Though those that see them in the scrapyard hear strange whispers coming from their scrapped husk."}, 
        "Steam Titan":{atk:20,def:50,spd:10,hp:70,img:"",moves:"Steam Burst, Overheat, Rearm",desc:"A failed protector, the Titan was meant to overlook Steam City, but due to a lack of funding and technology, they couldn't power the behemoth, the steam within its body leaking out dangerously. It can barely move an inch, but the outer plating of its body is nearly impossible to break."}, 
        "Capybarot":{atk:20,def:20,spd:50,hp:30,img:"",moves:"Rapid Fire, Bombs Away, Scratch",desc:"A common rodent experiment in the early days of Cyber Integration. The creature was meant for disposable tasks and protection before regulation got involved and the readily made test subjects were thrown into the woods."},
        "Punnky":{atk:40,def:10,spd:70,hp:30,img:"",moves:"Zap, Short Circuit, Jet Rush",desc:"A racing bot with an ingrained egotistical AI. It believes itself to be the fastest robot alive and commonly flaunts its speed in combat and while playing sneaky tricks."}, 
        "Iris":{atk:30,def:20,spd:60,hp:40,img:"",moves:"Beholders Knowledge, Scratch, Bite, Dash",desc:"A cat that has lived and hunted in the forest for years, blessed by the power of the IRIS."}, 
        "Clockstar":{atk:60,def:40,spd:30,hp:90,img:"",moves:"Rapid Fire, Overheat, Steam Burst",desc:"A messy sphere of gears and turrets, the gears near the bottom are rusty."}, 
        "Electron":{atk:50,def:20,spd:60,hp:30,img:"",moves:"Orbit, Zap",desc:"A blue center of raw energy, orbited by smaller, younger Electrons. It's piloted by the AI chip hidden underneath layers of plasma. It's highly unstable, commonly dispersing prematurely if getting hit."}, 
        "A1PHA":{atk:55,def:55,spd:50,hp:55,img:"",moves:"Plasma Slash, Jet Rush, Bite",desc:"Cyber Cities primary law enforcement personnel. Uploaded with criminal records every second, facial recognition, decision-making and combat AI, along with an arsenal hidden below sleek chrome; their terrifying red gaze strikes fear into any possible criminal. Though they do still like it when they're pet"},
        "Erodaki":{atk:40,def:30,spd:40,hp:50,img:"",moves:"Corrode, Acid Rounds, Toxic Splash",desc:"The modern equivalent of what the ancients called “rats”. Their acid is used to rip through infrastructure and sewer systems, breaking down the cybernetics into a puddle they can consume. Due to their blindness, they also commonly attack people, but are quickly put down by the countless defense systems in the city."},
        "Gunmetal":{atk:60,def:45,spd:30,hp:45,img:"",moves:"Rearm, Rapid Fire",desc:"TBD"},
        "Voltsune":{atk:30,def:35,spd:70,hp:25,img:"",moves:"Zap, Dash, Scratch",desc:"A natural trickster, it uses its speed and ability to fire electricity from one of its 9 tails to attack and steal from others within the forests. It's adorable outside does perfectly hides its mischievous nature, despite having thousands of years of simulated knowledge."},
        "Viper & Fang":{atk:70,def:35,spd:20,hp:60,img:"",moves:"Rust Slash",desc:"This ancient two headed dragon once tried to fly, but seen as a threat, the military shot it down from the sky. In the battered aftermath, it slugged its large body to flee to the sewers, swearing vengeance upon humans left to forever cry its acidic tears in the depths of the shadows slowly corroding away."},
        "Kiriiko":{atk:30,def:30,spd:50,hp:35,img:"",moves:"TBD",desc:"A small levitating white cat with a laser-rifle"},
        "Zyphos":{atk:90,def:70,spd:80,hp:90,img:"",moves:"TBD",desc:"A demigod that looks over the world "},
        "Schwerer Kaiser":{atk:60,def:40,spd:10,hp:80,img:"",moves:"Artillery Fire, Ultimate Shot",desc:"This creature served in the military, using its colossal head as a gun to fire upon prey. But after years of dedication it has become a shell of its former glory. Yet, despite its age the living weapon is still a powerful adversary."},
        "S.A.T":{atk:40,def:20,spd:30,hp:90,img:"",moves:"Ram, Hyper Sonic",desc:"An aerial creature that scouts and attacks from the skies. Speedy with moderate fire power but weak in defence. Used in the military to eradicate enemies without them ever coming close."},
        "Eve Unit 2":{atk:45,def:60,spd:50,hp:80,img:"",moves:"Progressive Knife, Rapid Fire",desc:"TBD"}
    }

    // Determines whether to open or close the info box
    if(!openState) {
        openInfo(nameClicked,kodialStats,cover,infoBox,contentBox)
        openState=true;
    } else {
        closeInfo(cover,infoBox,contentBox)
        openState=false;
    }
}

// Opens a Kodial info box
function openInfo(nameClicked,kodialStats,cover,info,contentBox) {
    // Shows the info box and overlay that lies behind it
    cover.style.backgroundColor="rgba(220,220,220,0.5)";
    cover.style.pointerEvents="all"
    info.style.opacity="1";
    info.style.top="20px";

    // Changes what information is shown based on the button/name that is clicked
    document.getElementById("name").textContent=nameClicked;
    document.getElementById("desc").textContent=kodialStats[nameClicked].desc;
    document.getElementById("baseMoves").textContent=kodialStats[nameClicked].moves;
    document.getElementById("atk").textContent=kodialStats[nameClicked].atk;
    document.getElementById("def").textContent=kodialStats[nameClicked].def;
    document.getElementById("spd").textContent=kodialStats[nameClicked].spd;
    document.getElementById("hp").textContent=kodialStats[nameClicked].hp;

    // Adds a blur behind the overlay and takes away its ability to be interacted with
    contentBox.style.filter="blur(5px)";
    contentBox.style.pointerEvents="none"
}

// Closes a Kodial info box
function closeInfo(cover,info,contentBox) {
    // Hides the info box and overlay
    cover.style.backgroundColor="rgba(220,220,220,0)";
    cover.style.pointerEvents="none";
    info.style.opacity="0";
    info.style.top="0px";

    // Removes the blur behind the overlay and adds the ability to be interacted back
    contentBox.style.filter="blur(0px)";
    contentBox.style.pointerEvents="all";
}