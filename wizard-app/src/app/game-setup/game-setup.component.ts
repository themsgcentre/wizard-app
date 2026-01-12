import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerSetupTableComponent } from '../player-setup-table/player-setup-table.component';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss'],
  standalone: true,
  imports: [FormsModule, PlayerSetupTableComponent],
})
export class GameSetupComponent {
  playerCount: number = 3;
  players: string[] = [];

  onPlayersChanged(players: string[]) {
    this.players = players;
  }

  startGame() {
    
  }

  private validPlayerNames(): boolean {
    return this.players.every(name => name.trim().length > 0);
  }

  private uniquePlayerNames(): boolean {
    for (let i = 0; i < this.players.length; i++) {
      for (let j = i + 1; j < this.players.length; j++) {
        if (this.players[i].trim() === this.players[j].trim() && j !== i) {
          return false;
        }
      }
    }
    return true;
  }
}
