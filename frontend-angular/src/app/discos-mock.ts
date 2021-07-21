import { Disco, Genero } from './disco.model';

export const discos = [
  {
    nome: 'Number of the Beast',
    banda: 0,
    ano: 1982,
    genero: Genero.ROCK,
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/1/1f/Iron_Maiden_-_The_Number_Of_The_Beast.jpg',
    preco: 20,
    estoque: 5
  },
  {
    nome: 'Dois',
    banda: 1,
    ano: 1986,
    genero: Genero.ROCK,
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/7/72/Legi%C3%A3o_Urbana_-_Dois.jpg',
    preco: 30,
    estoque: 3
  },
  {
    nome: 'Lado B Lado A',
    banda: 2,
    ano: 1999,
    genero: Genero.ROCK,
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/LadoB-LadoA.jpg',
    preco: 15,
    estoque: 0
  }
];
