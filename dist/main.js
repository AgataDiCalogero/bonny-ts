"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Startup_1 = require("./models/Startup");
const Incentivo_1 = require("./models/Incentivo");
const Cittadino_1 = require("./models/Cittadino");
// Startup
const s1 = new Startup_1.Startup("MotionWear", "tecnologie wearable", "Dispositivi per monitoraggio attività", ["braccialetto smart", "app companion"]);
const s2 = new Startup_1.Startup("FitLife", "app per il fitness", "Programmi di allenamento guidati", ["app iOS", "app Android"]);
// Incentivi
const i1 = new Incentivo_1.Incentivo("BONUSFIT100", "Bonus per acquisto wearable", 100, ["ISEE < 20k", "cittadino italiano"]);
const i2 = new Incentivo_1.Incentivo("SPORTPASS200", "Voucher attività sportive", 200, ["ISEE < 35k", "maggiorenne"]);
// Cittadino
const c1 = new Cittadino_1.Cittadino("Giulia", "Bianchi", 31, ["yoga", "corsa"]);
// Flussi
i1.assegnaAStartup(s1); // -> chiama s1.riceviIncentivo(...)
i2.assegnaAStartup(s2);
c1.partecipaAttivita(s1);
c1.partecipaAttivita(s2);
// Verifiche stato (read-only)
console.log("Incentivi s1:", s1.incentiviRicevuti.map(x => x.codiceIdentificativo));
console.log("Incentivi s2:", s2.incentiviRicevuti.map(x => x.codiceIdentificativo));
console.log("Attività cittadino:", c1.attivitaPartecipate.map(x => x.nome));
//# sourceMappingURL=main.js.map