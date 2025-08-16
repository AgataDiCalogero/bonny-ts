import { Startup } from "./models/Startup";
import { Incentivo } from "./models/Incentivo";
import { Cittadino } from "./models/Cittadino";

// Startup
const s1 = new Startup(
  "MotionWear",
  "tecnologie wearable",
  "Dispositivi per monitoraggio attività",
  ["braccialetto smart", "app companion"]
);
const s2 = new Startup(
  "FitLife",
  "app per il fitness",
  "Programmi di allenamento guidati",
  ["app iOS", "app Android"]
);

// Incentivi
const i1 = new Incentivo(
  "BONUSFIT100",
  "Bonus per acquisto wearable",
  100,
  ["ISEE < 20k", "cittadino italiano"]
);
const i2 = new Incentivo(
  "SPORTPASS200",
  "Voucher attività sportive",
  200,
  ["ISEE < 35k", "maggiorenne"]
);

// Cittadino
const c1 = new Cittadino("Giulia", "Bianchi", 31, ["yoga", "corsa"]);

// Flussi
i1.assegnaAStartup(s1);      // -> chiama s1.riceviIncentivo(...)
i2.assegnaAStartup(s2);

c1.partecipaAttivita(s1);
c1.partecipaAttivita(s2);

// Verifiche stato (read-only)
console.log("Incentivi s1:", s1.incentiviRicevuti.map(x => x.codiceIdentificativo));
console.log("Incentivi s2:", s2.incentiviRicevuti.map(x => x.codiceIdentificativo));
console.log("Attività cittadino:", c1.attivitaPartecipate.map(x => x.nome));
