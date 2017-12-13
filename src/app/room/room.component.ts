import { Component, OnInit } from '@angular/core';
import { Room, Option } from '../room.model';
import { Player } from '../player.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RoomService } from '../room.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [RoomService, PlayerService]
})
export class RoomComponent implements OnInit {
  roomId: number = null;
  room: Room = null;
  player: Player = null;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private roomService: RoomService, private playerService: PlayerService) {}

  ngOnInit() {
    this.player = this.playerService.getPlayer();
    this.route.params.forEach((urlParameters) => {
      this.roomId = parseInt(urlParameters['id']);
    });
    this.room = this.roomService.findById(this.roomId);
  }

  goToRoom(id: number) {
    this.router.navigate(['room', id]);
    this.roomId = id;
    this.room = this.roomService.findById(id);
    this.checkRoom(id);
  }

  checkRoom(roomId: number) {
    if (roomId === 2) {
      this.player.hasRock = true;
    }
    if (roomId === 3) {
      this.player.hasRock = false;
    }
  }
}
