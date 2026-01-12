import { Injectable } from '@angular/core';
import { PlayerDto } from '../interfaces/player-dto';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  players: PlayerDto[] = [];

  setPlayers(playerNames: string[]) {
    this.players = playerNames.map((name, index) => ({
      name,
      position: index,
      score: 0,
    }));
  }

  clearPlayers() {
    this.players = [];
  }
}
