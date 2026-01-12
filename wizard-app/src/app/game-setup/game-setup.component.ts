import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerSetupTableComponent } from '../player-setup-table/player-setup-table.component';
import { AlertController } from '@ionic/angular';

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

  constructor(private alertController: AlertController) {}

  onPlayersChanged(players: string[]) {
    this.players = players;
  }

  async startGameClicked() {
    if (!this.validPlayerNames()) {
      await this.showError('Error', 'All player names must be filled in.');
      return;
    }

    if (!this.uniquePlayerNames()) {
      await this.showError('Error', 'All player names must be unique.');
      return;
    }

    const confirmed = await this.showConfirm('Start game?', 'Do you want to start the game now?');
    if (confirmed) {
      this.startGame();
    }
  }

  private startGame() {
    console.log('Game started with players:', this.players);
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

  private async showError(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  private async showConfirm(header: string, message: string): Promise<boolean> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Start', role: 'confirm' },
      ],
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    return result.role === 'confirm';
  }
}
