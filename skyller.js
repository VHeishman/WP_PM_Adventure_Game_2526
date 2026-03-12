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

class Power_Gen extends Item
{
    constructor()
    {
        super("Power Generator", "Increases power of Ele/lazer attacks for x turns", "consumable");
    }
}

class Rust_Rem extends Item
{
    constructor()
    {
        super("Rust Remover", "Heals a creature by x% HP", "consumable");
    }
}

class Focus_Drive extends Item
{
    constructor()
    {
        super("Focus Driver", "Increases critical hit chance by x% for x turns", "consumable");
    }
}

class Repair_Pack extends Item
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

class Fa_Plate extends Item
{
    constructor()
    {
        super("Faulty Plating", "Increases defense for x turns", "consumable");
    }
}

class Gas_Mask extends Item
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

class Iron_Pill extends Item
{
    constructor()
    {
        super("Iron Pill", "Increases damage, defense, health, and crit damage by x for 3 turns", "consumable");
    }
}

class Ch_Gas extends Item
{
    constructor()
    {
        super("Chlorine Gas", "Stuns the enemy for 2 turns, but reduces player accuracy by 25% for 3 turns", "consumable");
    }
}

class Lubricant extends Item
{
    constructor()
    {
        super("Lubricant", "Increases speed by 20%", "held");
    }
}