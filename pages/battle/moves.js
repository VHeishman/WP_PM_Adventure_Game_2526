class Moves {
  constructor(name, power, acc, type, other) {
    this.name = name;
    this.power = power;
    this.acc = acc;
    this.type = type;
    this.other = other;
  }
}

class Scratch extends Moves {
  constructor() {
    super("Scratch", 40, 100, 'Bio', null);
  }
}

class Bite extends Moves {
  constructor() {
    super("Bite", 70, 95, 'Bio', null);
  }
}

class Growth extends Moves {
  constructor() {
    super("Growth", 0, 100, 'Bio', "+30% hp");
  }
}

class Rapid_Fire extends Moves {
  constructor() {
    super("Rapid Fire", 40, 90, 'Artillery', "30% chance to hit twice");
  }
}

class Artillery_Fire extends Moves {
  constructor() {
    super("Artillery Fire", 50, 100, 'Artillery', null);
  }
}

class Ram extends Moves {
  constructor() {
    super("Ram", 30, 90, 'Artillery', "+30% Speed");
  }
}

class Bombs_Away extends Moves {
  constructor() {
    super("Bombs Away", 30, 90, 'Artillery', "10% chance to stun opponent");
  }
}

class Zap extends Moves {
  constructor() {
    super("Zap", 40, 100, 'Voltaic', null);
  }
}

class Short_Circuit extends Moves {
  constructor() {
    super("Short Circuit", 30, 80, 'Voltaic', "30% chance to stun if opponent Type is Cyber or Voltaic");
  }
}

class Dash extends Moves {
  constructor() {
    super("Dash", 35, 95, 'Voltaic', "+1 Turn Priority");
  }
}

class Overheat extends Moves {
  constructor() {
    super("Overheat", 50, 100, 'Steam', null);
  }
}

class Gear_Crunch extends Moves {
  constructor() {
    super("Gear Crunch", 80, 80, 'Steam', null);
  }
}

class Steam_Burst extends Moves {
  constructor() {
    super("Steam Burst", 0, 100, 'Steam', "-1 Turn Priority, returns 1/2 of damage taken to oppoenent");
  }
}

class Toxic_Splash extends Moves {
  constructor() {
    super("Toxic Splash", 30, 100, 'Corrosive', "50% chance to poison");
  }
}

class Acid_Rounds extends Moves {
  constructor() {
    super("Acid Rounds", 60, 100, 'Corrosive', null);
  }
}

class Poison_Shield extends Moves {
  constructor() {
    super("Poison Shield", 0, 100, 'Corrosive', "+20% def for 2 turns");
  }
}

class Mech_Punch extends Moves {
  constructor() {
    super("Mech Punch", 50, 100, 'Cyber', null);
  }
}

class Plasma_Slash extends Moves {
  constructor() {
    super("Plasma Slash", 70, 90, 'Cyber', null);
  }
}

class Jet_Rush extends Moves {
  constructor() {
    super("Jet Rush", 60, 90, 'Cyber', "+1 Turn Priority");
  }
}

class Magnetize extends Moves {
  constructor() {
    super("Magnetize", 60, 100, 'Cyber', "Deals +40 power to Cyber and Artillery, -10% Evasiveness for 2 turns");
    
  }
}