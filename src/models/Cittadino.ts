import { ICittadino } from "../interfaces/ICittadino";
import { IStartup } from "../interfaces/IStartup";

export class Cittadino implements ICittadino {
  public nome: string;
  public cognome: string;
  public eta: number;
  public interessiSportivi: string[];

  private _attivitaPartecipate: IStartup[] = [];
  public get attivitaPartecipate(): ReadonlyArray<IStartup> {
    return this._attivitaPartecipate;
  }

  constructor(
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: string[]
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.interessiSportivi = interessiSportivi;
  }

  public partecipaAttivita(startup: IStartup): void {
    this._attivitaPartecipate.push(startup);
    console.log(
      `${this.nome} ${this.cognome} partecipa ad attività di ${startup.nome}`
    );
  }
}
