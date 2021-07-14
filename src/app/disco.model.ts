export interface Disco {
  nome: string;
  banda: number;
  ano: number;
  genero: Genero;
  imagem: string;
  preco: number;
  estoque: number;
}

export enum Genero {
  ROCK,
  POP,
  SOUL,
  FUNK,
  ELECTRO,
  BLUES
}
