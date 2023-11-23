import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  // este decorador es usado para decir que es un servicio
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
  ];

  addCharacter(character: Character) {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleted(index: number) {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
