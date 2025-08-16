import { IStartup } from "../interfaces/IStartup";
import { IIncentivo } from "../interfaces/IIncentivo";

export class Startup implements IStartup {
  public nome: string;
  public settoreDiFocus: string;
  public descrizione: string;
  public prodottiServiziOfferti: string[];

  private _incentiviRicevuti: IIncentivo[] = [];
  public get incentiviRicevuti(): ReadonlyArray<IIncentivo> {
    return this._incentiviRicevuti;
  }

  constructor(
    nome: string,
    settoreDiFocus: string,
    descrizione: string,
    prodottiServiziOfferti: string[]
  ) {
    this.nome = nome;
    this.settoreDiFocus = settoreDiFocus;
    this.descrizione = descrizione;
    this.prodottiServiziOfferti = prodottiServiziOfferti;
  }

  public riceviIncentivo(incentivo: IIncentivo): void {
    this._incentiviRicevuti.push(incentivo);
    console.log(
      `${this.nome} ha ricevuto l'incentivo ${incentivo.codiceIdentificativo}`
    );
  }
}
