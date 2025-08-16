import { IIncentivo } from "../interfaces/IIncentivo";
import { IStartup } from "../interfaces/IStartup";
export declare class Incentivo implements IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string[];
    constructor(codiceIdentificativo: string, descrizione: string, valoreIncentivo: number, criteriEleggibilita: string[]);
    assegnaAStartup(startup: IStartup): void;
}
//# sourceMappingURL=Incentivo.d.ts.map