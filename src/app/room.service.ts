import { Injectable } from '@angular/core';
import { Room, Option } from './room.model';
import { ROOMS } from './mock-rooms';

@Injectable()
export class RoomService {
  constructor() {}

  findById(searchId) {
    for (let i = 0; i < ROOMS.length; i++) {
      if (ROOMS[i].id === searchId) {
        return ROOMS[i];
      }
    }
    return null;
  }
}
