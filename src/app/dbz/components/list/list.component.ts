import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() characterList: Character[] = [];
  @Output() public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete(index: number): void {
    this.onDeleteCharacter.emit(index);
  }
}
