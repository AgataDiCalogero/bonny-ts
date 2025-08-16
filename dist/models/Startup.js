"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
class Startup {
    nome;
    settoreDiFocus;
    descrizione;
    prodottiServiziOfferti;
    _incentiviRicevuti = [];
    get incentiviRicevuti() {
        return this._incentiviRicevuti;
    }
    constructor(nome, settoreDiFocus, descrizione, prodottiServiziOfferti) {
        this.nome = nome;
        this.settoreDiFocus = settoreDiFocus;
        this.descrizione = descrizione;
        this.prodottiServiziOfferti = prodottiServiziOfferti;
    }
    riceviIncentivo(incentivo) {
        this._incentiviRicevuti.push(incentivo);
        console.log(`${this.nome} ha ricevuto l'incentivo ${incentivo.codiceIdentificativo}`);
    }
}
exports.Startup = Startup;
//# sourceMappingURL=Startup.js.map