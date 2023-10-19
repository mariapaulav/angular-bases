import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  @Output()
  public onNewCharacter = new EventEmitter();

  constructor() {}

  public character: Character = {
    name: '',
    power: 0,
  };

  ngOnInit() {}

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;
    this.character = { name: '', power: 0 };
  }
}
