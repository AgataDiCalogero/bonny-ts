import { IIncentivo } from "./IIncentivo";
export interface IStartup {
    nome: string;
    settoreDiFocus: string;
    descrizione: string;
    prodottiServiziOfferti: string[];
    riceviIncentivo(incentivo: IIncentivo): void;
}
//# sourceMappingURL=IStartup.d.ts.map