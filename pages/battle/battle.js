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
    const spr = "placeholder"

    super("Iris", "Bio", 40, 30, 20, 60, moves, false, spr, description);
  }
}

function main() {
  let i = new Iris();
  i.display();
}

main();