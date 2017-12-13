import { Room, Option } from './room.model';

export const ROOMS: Room[] = [
  new Room(
    0,
    "Prison Cell",
    "You got caught...Try to escape!!! Choose your path wisely. It looks dark to the left and looks like there is light to the right.",
    [new Option(1, "Go into the dark", false),
    new Option(4, "Go into the Light", false)]
  ),
  new Room(
    1,
    "Tunnel",
    "You just entered a dark Tunnel. Move carefully through the dark in this dark tunnel and be careful not to make the wrong choice next.",
    [new Option(0, "Go to the Prison Cell", false),
    new Option(2, "Go deeper into the Tunnel", false),
    new Option(3, "Go towards a door", false)]
  ),
  // needs a rock
  new Room(
    2,
    "Mysterious Cavern",
    "You made it to the secret Cavern and found a Rock!",
    [new Option(1, "Go back", false)]
  ),
  new Room(
    3,
    "Pit of Misery",
    "You have Entered The Pit of Misery... Dilly Dilly",
    [new Option(0, "💀 You died 💀", false)]
  ),
  new Room(
    4,
    "Hallway",
    "You entered a Hallway, the left is more Hallway... Don't go right.",
    [new Option(5, "Go left", false),
    new Option(7, "Go right", false)]
  ),
  new Room(
    5,
    "Hallway",
    "Keep going to enter the Kitchen and get food!!!",
    [new Option(6, "Go to the Kitchen", false),
    new Option(4, "Go back", false)]
  ),
  new Room(
    6,
    "Guard Room",
    "I lied, you entered the Guard room and got caught.  They now take you to the Pit of Misery.",
    [new Option(3, "You got caught :C", false)]
  ),
  new Room(
    7,
    "Stairwell",
    "There is a locked door ahead, you need an item to get past the door. ",
    [new Option(4, "Go back", false),
    new Option(8, "Break the Lock on the Door", true)]
  ),
  new Room(
    8,
    "Landing",
    "Continue to the Next Part and don't get caught!!!",
    [new Option(7, "Go back", false)]
  )
];
