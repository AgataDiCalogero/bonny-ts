"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incentivo = void 0;
class Incentivo {
    codiceIdentificativo;
    descrizione;
    valoreIncentivo;
    criteriEleggibilita;
    constructor(codiceIdentificativo, descrizione, valoreIncentivo, criteriEleggibilita) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valoreIncentivo = valoreIncentivo;
        this.criteriEleggibilita = criteriEleggibilita;
    }
    assegnaAStartup(startup) {
        startup.riceviIncentivo(this);
        console.log(`Incentivo ${this.codiceIdentificativo} assegnato a ${startup.nome}`);
    }
}
exports.Incentivo = Incentivo;
//# sourceMappingURL=Incentivo.js.map