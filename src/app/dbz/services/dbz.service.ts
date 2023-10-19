import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({
  // este decorador es usado para decir que es un servicio
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
  ];

  onNewCharacter(character: Character) {
    this.characters.push(character);
  }

  onDeleted(index: number) {
    this.characters.splice(index, 1);
  }
}
