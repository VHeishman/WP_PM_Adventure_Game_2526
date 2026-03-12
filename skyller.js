//class outline for the items
//the file is temperary

function randint(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Item
{
    constructor(name, desc, type)
    {
        this.name = name;
        this.desc = desc; //stands for description
        this.type = type;
    }
    getName() //a method made mainly for testing
    {
        return `Name: ${this.name}`;
    }
}

class PoGen extends Item
{
    constructor()
    {
        super("Power Generator", "Increases power of electric/lazer attacks for x turns", "consumable");
    }
}

class RuRem extends Item
{
    constructor()
    {
        super("Rust Remover", "Heals a creature by x% HP", "consumable");
    }
}

class FoDri extends Item
{
    constructor()
    {
        super("Focus Driver", "Increases critical hit chance by x% for x turns", "consumable");
    }
}

class RePac extends Item
{
    constructor()
    {
        super("Repair Pack", "Revives a creature", "consumable");
    }
}

class Laser extends Item
{
    constructor()
    {
        super("Laser", "Gives a creature the ability to use laser attacks", "held");
    }
}

class Scope extends Item
{
    constructor()
    {
        super("Scope", "Increases critical damage multiplier", "held");
    }
}

class FaPla extends Item
{
    constructor()
    {
        super("Faulty Plating", "Increases defense for x turns", "consumable");
    }
}

class GaMas extends Item
{
    constructor()
    {
        super("Gas Mask", "Increases defense for the rest of the battle", "held");
    }
}

class Spikes extends Item
{
    constructor()
    {
        super("Spikes", "Deals x damage after getting attacked", "held");
    }
}

class IrPil extends Item
{
    constructor()
    {
        super("Iron Pill", "Increases damage, defense, health, and crit damage by x for 3 turns", "consumable");
    }
}

class ChGas extends Item
{
    constructor()
    {
        super("Chlorine Gas", "Stuns the enemy for 2 turns, but reduces player accuracy by 25% for 3 turns", "consumable");
    }
}

class Lub extends Item
{
    constructor()
    {
        super("Lubricant", "Increases speed by 20%", "held");
    }
}

/////////////////////////////////////////////////////////////////
//code for the Kodials

class Kodial {
  constructor(name, type, maxHP, atk, def, spd, moveset, boss, sprite, codexDesc, area) {
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
    this.area = area //int
    this.level = 1;
    this.heldItem = null

    if (!this.isBoss){
      this.modify_stats(randint(0, 5));
    }
  }

  modify_stats(perc) {
    //increases all stats by perc%
    let statSpread = [this.maxHP, this.atk, this.def, this.spd];

    for (let i=0; i<statSpread.length; i++){
      statSpread[i] = Math.round(statSpread[i] + statSpread[i] * (0.01*perc));
    }

    this.maxHP, this.currHP = statSpread[0];
    this.atk = statSpread[1];
    this.def = statSpread[2];
    this.spd = statSpread[3];
  }

  reduce_hp(damage) {
    this.currHP -= damage;
  }

  display() {
    console.log(this.name);
    console.log(`Type: ${this.type}`);
    console.log(`Max HP: ${this.maxHP}`);
    console.log(`Current HP: ${this.currHP}`);
    console.log(`Attack: ${this.atk}`);
    console.log(`Defense: ${this.def}`);
    console.log(`Speed: ${this.spd}`);
    console.log(`Description: ${this.codexDesc}`);
  }
}


class Iris extends Kodial{
  constructor() {
    const moves = ["Beholder's Knowledge", "Scratch", "Bite", "Dash"];
    const description = "A cat that has lived and hunted in the forest for years, blessed by the power of the IRIS";
    const spr = "placeholder";

    super("Iris", "Bio", 40, 30, 20, 60, moves, false, spr, description, 1);
  }
}

function main() {
  let i = new Iris();
  i.display();
}

main();

//the code made from this commnet to the line of "/" is nearly all not mine
//The descriptions of some are blank due to not having one in the google doc

class Capybarot extends Kodial{
    constructor(){
        const moves = ["Rapid Fire", "Bombs Away", "Scratch"];
        const description = "A common rodent experiment in the early days of Cyber Integration. The creature was meant for disposable tasks and protection before regulation got involved and the readily made test subjects were thrown into the woods";
        const spr = "placeholder";

        super("Capybarot", "Artillery", 30, 20, 20, 50, moves, false, spr, description, 1);
    }
}

class Punnky extends Kodial{
    constructor(){
        const moves = ["Zap", "Short Circuit"];
        const description = "A racing bot with an ingrained egotistical AI. It believes itself to be the fastest robot alive and commonly flaunts its speed in combat and while playing sneaky tricks";
        const spr = "placeholder";

        super("Punnky", "Voltaic", 30, 40, 10, 70, moves, false, spr, description, 1);
    }
}

class Laylas1WIP extends Kodial{
    constructor(){
        const moves = [""];
        const description = "";
        const spr = "placeholder";

        super("");
    }
}

class SteTi extends Kodial{
    constructor(){
        const moves = ["Steam Burst", "Overheat", "Rearm"];
        const description = "A failed protector, the Titan was meant to overlook Steam City, but due to a lack of funding and technology, they couldn’t power the behemoth, the steam within its body leaking out dangerously. It can barely move an inch, but the outer plating of its body is nearly impossible to break";
        const spr = "placeholder";

        super("Steam Titan", "Steam", 70, 20, 50, 10, moves, false, spr, description, 2);
    }
}

class Clockstar extends Kodial{
    constructor(){
        const moves = ["Rapid Fire", "Overheat", "Steam Burst"];
        const description = "";
        const spr = "placeholder";

        super("Clockstar", "Steam", 90, 60, 40, 30, moves, false, spr, description, 2);
    }
}

class Gunmetal extends Kodial{
    constructor(){
        const moves = ["Rearm", "Rapid Fire", "Artillery Fire"];
        const description = "";
        const spr = "placeholder";

        super("Gunmetal", "Artillery", 45, 60, 45, 30, moves, false, spr, description, 2);
    }
}

class Ele extends Kodial{
    constructor(){
        const moves = ["Orbit", "Zap", "Magnetize"];
        const description = "";
        const spr = "placeholder";

        super("Electron", "Valtaic", 30, 50, 20, 60, moves, false, spr, description, 3);
    }
}

class A1pha extends Kodial{
    constructor(){
        const moves = ["Plasma Slash", "Jet Rush", "Bite"];
        const description = "Cyber Cities primary law enforcement personnel. Uploaded with criminal records every second, facial recognition, decision-making and combat AI, along with an arsenal hidden below sleek chrome; their terrifying red gaze strikes fear into any possible criminal. Though they do still like it when they’re pet";
        const spr = "placeholder";

        super("A1PHA", "Cyber", 55, 55, 55, 50, moves, false, spr, description, 3);
    }
}

class Erodaki extends Kodial{
    constructor(){
        const moves = ["Corrode", "Acids Rounds", "Toxic Splash"];
        const description = "The modern equivalent of what the ancients called “rats”. Their acid is used to rip through infrastructure and sewer systems, breaking down the cybernetics into a puddle they can consume. Due to their blindness, they also commonly attack people, but are quickly put down by the countless defense systems in the city.";
        const spr = "placeholder";

        super("Erodaki", "Corrosive", 50, 40, 30, 40, moves, false, spr, description, 3);
    }
}

class Sat extends Kodial{
    constructor(){
        const moves = ["Ram", "Artillery Fire", "Hyper Sonic"];
        const description = "An aerial creature that scouts and attacks from the skies. Speedy with moderate fire power but weak in defence. Used in the military to eradicate enemies without them ever coming close.";
        const spr = "placeholder";

        super("Sky-Automated-Terror (S.A.T)", "Artillery", 30, 40, 20, 90, moves, false, spr, description, 3);
    }
}

class Shad extends Kodial{
    constructor(){
        const moves = ["Dash", "Short Circuit", "SHADOW BURST.EXE"];
        const description = "One of the most advanced series of Kodials, the C0RE series, was made for precision and strength, each model stronger and faster than the last. This was the first of the C0RE series, not even given a proper name, yet is seemingly fully functional? The unknown energy emanating from it must be simply leftover power. Though those that see them in the scrapyard hear strange whispers coming from their scrapped husk.";
        const spr = "placeholder";

        super("Shadowcore 01", "Voltaic", 40, 80, 40, 60, moves, false, spr, description, 4);
    }
}

class Vip extends Kodial{
    constructor(){
        const moves = ["Rust Slash"];
        const description = "This ancient two headed dragon once tried to fly, but seen as a threat, the military shot it down from the sky. In the battered aftermath, it slugged its large body to flee to the sewers, swearing vengeance upon humans left to forever cry its acidic tears in the depths of the shadows slowly corroding away.";
        const spr = "placeholder";

        super("Viper and Fang", "Corrosive", 60, 40, 35, 20, moves, false, spr, description, 4);
    }
}

class Schwerer extends Kodial{
    constructor(){
        const moves = ["Artillery Fire", "Ram", "Ultimate Shot"];
        const description = "This creature served in the military, using its colossal head as a gun to fire upon prey. It was the king above all others. But after years of dedication to the city it has become a shell of its former glory. Yet, despite its age the living weapon is still a powerful adversary and tough being to destroy.";
        const spr = "placeholder";

        super("Schwerer Kaiser", "Artillery", 80, 60, 40, 10, moves, false, spr, description, 4);
    }
}