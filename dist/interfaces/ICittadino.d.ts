import { IStartup } from "./IStartup";
export interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    partecipaAttivita(startup: IStartup): void;
}
//# sourceMappingURL=ICittadino.d.ts.map