export interface Przestepca {
  Imie: string;
  Nazwisko: string;
  PESEL: string;
}

export interface PrzestepcaId extends Przestepca {
  id: string;
}
