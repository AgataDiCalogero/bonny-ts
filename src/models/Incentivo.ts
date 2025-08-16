import {IIncentivo} from "../interfaces/IIncentivo"
import {IStartup} from "../interfaces/IStartup"

export class Incentivo implements IIncentivo {
    public codiceIdentificativo: string;
    public descrizione: string;
    public valoreIncentivo: number;
    public criteriEleggibilita: string[];

    constructor(
        codiceIdentificativo: string,
        descrizione: string,
        valoreIncentivo: number,
        criteriEleggibilita: string[]
    ) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valoreIncentivo = valoreIncentivo;
        this.criteriEleggibilita = criteriEleggibilita;
    }

    assegnaAStartup(startup: IStartup): void {
        startup.riceviIncentivo(this);
        console.log(`Incentivo ${this.codiceIdentificativo} assegnato a ${startup.nome}`);
    }
}