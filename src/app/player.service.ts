import { Injectable } from '@angular/core';
import { Player } from "./player.model";
import { PLAYER } from "./mock-player";


@Injectable()
export class PlayerService {
  constructor() {}

  setPlayer(newPlayer: Player) {
    PLAYER[0] = newPlayer;
  }

  getPlayer() {
    return PLAYER[0];
  }
}
