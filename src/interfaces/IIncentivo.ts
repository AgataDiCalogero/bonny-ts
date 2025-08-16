import { IStartup } from "./IStartup";

export interface IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string[];
    assegnaAStartup(startup: IStartup): void;
}
