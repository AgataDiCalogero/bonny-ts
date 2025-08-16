import { ICittadino } from "../interfaces/ICittadino";
import { IStartup } from "../interfaces/IStartup";
export declare class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    private _attivitaPartecipate;
    get attivitaPartecipate(): ReadonlyArray<IStartup>;
    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]);
    partecipaAttivita(startup: IStartup): void;
}
//# sourceMappingURL=Cittadino.d.ts.map