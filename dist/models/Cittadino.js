"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cittadino = void 0;
class Cittadino {
    nome;
    cognome;
    eta;
    interessiSportivi;
    _attivitaPartecipate = [];
    get attivitaPartecipate() {
        return this._attivitaPartecipate;
    }
    constructor(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    partecipaAttivita(startup) {
        this._attivitaPartecipate.push(startup);
        console.log(`${this.nome} ${this.cognome} partecipa ad attività di ${startup.nome}`);
    }
}
exports.Cittadino = Cittadino;
//# sourceMappingURL=Cittadino.js.map