import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from "../player.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  providers: [PlayerService]
})
export class StartPageComponent implements OnInit {
  player: Player;
  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }

  makePlayer(playerName) {
    this.player = new Player(playerName);
    this.playerService.setPlayer(this.player);
  }
}
