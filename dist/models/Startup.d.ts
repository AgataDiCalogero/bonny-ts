import { IStartup } from "../interfaces/IStartup";
import { IIncentivo } from "../interfaces/IIncentivo";
export declare class Startup implements IStartup {
    nome: string;
    settoreDiFocus: string;
    descrizione: string;
    prodottiServiziOfferti: string[];
    private _incentiviRicevuti;
    get incentiviRicevuti(): ReadonlyArray<IIncentivo>;
    constructor(nome: string, settoreDiFocus: string, descrizione: string, prodottiServiziOfferti: string[]);
    riceviIncentivo(incentivo: IIncentivo): void;
}
//# sourceMappingURL=Startup.d.ts.map