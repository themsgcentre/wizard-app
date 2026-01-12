import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-setup-table',
  templateUrl: './player-setup-table.component.html',
  styleUrls: ['./player-setup-table.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class PlayerSetupTableComponent implements OnInit, OnChanges {

  @Input() playerCount: number = 3;
  @Output() playersChanged = new EventEmitter<string[]>();
  players: string[] = [];

  ngOnInit() {
    this.initializePlayers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['playerCount'] && !changes['playerCount'].firstChange) {
      this.adjustPlayerArray();
    }
  }

  private initializePlayers() {
    this.players = new Array(this.playerCount).fill('');
    this.playersChanged.emit(this.players);
  }

  private adjustPlayerArray() {
    const currentLength = this.players.length;
    const newLength = this.playerCount;

    if (newLength > currentLength) {
      for (let i = currentLength; i < newLength; i++) {
        this.players.push('');
      }
    } else if (newLength < currentLength) {
      this.players = this.players.slice(0, newLength);
    }
    this.playersChanged.emit(this.players);
  }
}
