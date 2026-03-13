class Kodial {
  constructor(name, type, maxHP, atk, def, spd, moveset, boss, sprite, codexDesc) {
    this.name = name; //str
    this.type = type; //'Bio' or 'Artillery' or 'Steam' or 'Corrosive' or 'Cyber' or 'Voltaic' | str
    this.maxHP = maxHP; //int
    this.currHP = this.maxHP;
    this.atk = atk; //int
    this.def = def; //int
    this.spd = spd; //int
    this.moveset = moveset; //list of Move objects
    this.isBoss = boss; //bool

    this.sprite = sprite; //file link
    this.codexDesc = codexDesc; //str
    this.level = 1;
    this.heldItem = null;
    this.fainted = false;

    if (!this.isBoss){
      this.modify_stats(randint(0, 5));
    }
  }

  modify_stats(perc) {
    //increases all stats by perc%
    let statSpread = [this.maxHP, this.atk, this.def, this.spd];

    for (let i=0; i<statSpread.length; i++){
      statSpread[i] = Math.ceil(statSpread[i] + statSpread[i] * (0.01*perc));
    }

    this.maxHP = statSpread[0];
    this.currHP = this.maxHP;
    this.atk = statSpread[1];
    this.def = statSpread[2];
    this.spd = statSpread[3];
  }

  level_up() {
    this.level++;
    this.modify_stats(this.level*2);
    const out = `${this.name} leveled up! ${this.name} is now level ${this.level}`
    console.log(out);
  }

  reduce_hp(damage) {
    this.currHP -= damage;
    if (this.currHP <= 0) {
      this.currHP = 0;
      this.fainted = true;
      const out = `${this.name} fainted!`;
    }
  }

  display() {
    let out = (this.name);
    out += (`\nLevel ${this.level}`);
    out += (`\nType: ${this.type}`);
    out += (`\nMax HP: ${this.maxHP}`);
    out += (`\nCurrent HP: ${this.currHP}`);
    out += (`\nAttack: ${this.atk}`);
    out += (`\nDefense: ${this.def}`);
    out += (`\nSpeed: ${this.spd}`);
    out += (`\nDescription: ${this.codexDesc}`);

    console.log(out);
  }

  determine_effectiveness(move, other) {
    let superEffective = false;
    if (move.type == "Bio" && other.type == "Voltaic") {
      superEffective = true;
    }
    else if (move.type == "Artillery" && (other.type == "Bio" || other.type == "Steam")) {
      superEffective = true;
    }
    else if (move.type == "Voltaic" && (other.type == "Corrosive" || other.type == "Cyber")) {
      superEffective = true;
    }
    else if (move.type == "Steam" && (other.type == "Artillery" || other.type == "Cyber")) {
      superEffective = true;
    }
    else if (move.type == "Corrosive" && (other.type == "Bio" || other.type == "Artillery")) {
      superEffective = true;
    }
    else if (move.type == "Cyber" && (other.type == "Voltaic" || other.type == "Steam")) {
      superEffective = true;
    }

    if (superEffective) {
      out = "It's super effective!";
      return 1.7;
    }
    else {
      return 1;
    }
  }

  calc_damage(move, other) {
    const crit = (randint(1, 20) == 20)+1;
    if (crit==2) {
      const out = "Critical Hit!";
      console.log(out);
    }
    let stab = 1;
    if (this.type == move.type) {
      stab += 0.4;}

    let dmg = (((3.5*this.level*crit/5 +2) * move.power * this.atk/other.def)/50 +2) * stab * this.determine_effectiveness(move, other);
    const randMod = randint(85, 105) / 100;

    return dmg * randMod;
  }

  use_move(move, other) {
    const hit = randint(1, 100) <= move.acc;
    if (hit) {
      console.log(`${this.name} used ${move.name}`);
      const dealt = Math.ceil(this.calc_damage(move, other));
      other.reduce_hp(dealt);
      console.log(`dealt ${dealt} damage`);
    }
    else {this.missed_attack();
    }
  }

  missed_attack() {
    const out = (`${this.name} missed!`);
    console.log(out);
  }
}


class Iris extends Kodial{
  constructor() {
    const moves = [new Beholders_Knowledge(), new Scratch(), new Bite(), new Dash()];
    const description = "A cat that has lived and hunted in the forest for years, blessed by the power of the IRIS";
    const spr = "placeholder"

    super("Iris", "Bio", 40, 30, 30, 50, moves, false, spr, description);
  }
}

class Clockstar extends Kodial{
  constructor() {
    const moves = [new Rapid_Fire(), new Overheat(), new Steam_Burst()];
    const description = "A messy sphere of gears and turrets, the gears near the bottom are rusty";
    const spr = "placeholder"

    super("Clockstar", "Steam", 70, 60, 40, 30, moves, false, spr, description);
  }
}

class Punnky extends Kodial{
  constructor() {
    const moves = [new Zap(), new Short_Circuit()];
    const description = "A racing bot with an ingrained egotistical AI. It believes itself to be the fastest robot alive and commonly flaunts its speed in combat and while playing sneaky tricks";
    const spr = "placeholder";

    super("Punnky", "Voltaic", 30, 40, 10, 70, moves, false, spr, description, 1);
  }
}

class SteTi extends Kodial{
  constructor(){
    const moves = [new Steam_Burst(), new Overheat(), new Rearm()];
    const description = "A failed protector, the Titan was meant to overlook Steam City, but due to a lack of funding and technology, they couldn’t power the behemoth, the steam within its body leaking out dangerously. It can barely move an inch, but the outer plating of its body is nearly impossible to break";
    const spr = "placeholder";

    super("Steam Titan", "Steam", 70, 20, 50, 10, moves, false, spr, description, 2);
  }
}

class Gunmetal extends Kodial{
  constructor(){
    const moves = [new Rearm(), new Rapid_Fire(), new Artillery_Fire()];
    const description = "";
    const spr = "placeholder";

    super("Gunmetal", "Artillery", 45, 60, 45, 30, moves, false, spr, description, 2);
  }
}

class Ele extends Kodial{
  constructor(){
    const moves = [new Orbit(), new Zap(), new Magnetize()];
    const description = "";
    const spr = "placeholder";

    super("Electron", "Valtaic", 30, 50, 20, 60, moves, false, spr, description, 3);
  }
}

class A1pha extends Kodial{
  constructor(){
    const moves = [new Plasma_Slash(), new Jet_Rush(), new Bite()];
    const description = "Cyber Cities primary law enforcement personnel. Uploaded with criminal records every second, facial recognition, decision-making and combat AI, along with an arsenal hidden below sleek chrome; their terrifying red gaze strikes fear into any possible criminal. Though they do still like it when they’re pet";
    const spr = "placeholder";

    super("A1PHA", "Cyber", 55, 55, 55, 50, moves, false, spr, description, 3);
  }
}

class Erodaki extends Kodial{
  constructor(){
    const moves = [new Corrode(), new Acids_Rounds(), new Toxic_Splash()];
    const description = "The modern equivalent of what the ancients called “rats”. Their acid is used to rip through infrastructure and sewer systems, breaking down the cybernetics into a puddle they can consume. Due to their blindness, they also commonly attack people, but are quickly put down by the countless defense systems in the city.";
    const spr = "placeholder";

    super("Erodaki", "Corrosive", 50, 40, 30, 40, moves, false, spr, description, 3);
  }
}

class Sat extends Kodial{
  constructor(){
    const moves = [new Ram(), Artillery_Fire(), new Hyper_Sonic()];
    const description = "An aerial creature that scouts and attacks from the skies. Speedy with moderate fire power but weak in defence. Used in the military to eradicate enemies without them ever coming close.";
    const spr = "placeholder";

    super("Sky-Automated-Terror (S.A.T)", "Artillery", 30, 40, 20, 90, moves, false, spr, description, 3);
  }
}

class Shad extends Kodial{
  constructor(){
    const moves = [new Dash(), new Short_Circuit(), new Shadow_Burst()];
    const description = "One of the most advanced series of Kodials, the C0RE series, was made for precision and strength, each model stronger and faster than the last. This was the first of the C0RE series, not even given a proper name, yet is seemingly fully functional? The unknown energy emanating from it must be simply leftover power. Though those that see them in the scrapyard hear strange whispers coming from their scrapped husk.";
    const spr = "placeholder";

    super("Shadowcore 01", "Voltaic", 40, 80, 40, 60, moves, false, spr, description, 4);
  }
}

class Vip extends Kodial{
  constructor(){
    const moves = [new Rust_Slash()];
    const description = "This ancient two headed dragon once tried to fly, but seen as a threat, the military shot it down from the sky. In the battered aftermath, it slugged its large body to flee to the sewers, swearing vengeance upon humans left to forever cry its acidic tears in the depths of the shadows slowly corroding away.";
    const spr = "placeholder";

    super("Viper and Fang", "Corrosive", 60, 40, 35, 20, moves, false, spr, description, 4);
  }
}

class Schwerer extends Kodial{
  constructor(){
    const moves = [new Artillery_Fire(), new Ram(), new Ultimate_Shot()];
    const description = "This creature served in the military, using its colossal head as a gun to fire upon prey. It was the king above all others. But after years of dedication to the city it has become a shell of its former glory. Yet, despite its age the living weapon is still a powerful adversary and tough being to destroy.";
    const spr = "placeholder";

    super("Schwerer Kaiser", "Artillery", 80, 60, 40, 10, moves, false, spr, description, 4);
  }
}

function main() {
  let i = new Iris();
  let c = new Clockstar();
  for (let n=0; n<9; n++){
    i.level_up();}

  i.display();
  c.display();
  console.log("-----------------------------");
  i.use_move(i.moveset[2], c);
  console.log("-----------------------------");
  c.display();


}

main();