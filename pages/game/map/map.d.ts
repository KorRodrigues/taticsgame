interface FloorObject {
  name: string;
  group: 'ally' | 'enemy' | 'neutral';
  blockPass: boolean;
  keyReference: string;
}

interface Tile {
  type: 'floor';
  objectIn?: FloorObject;
}

interface GameMap {
  name: string;
  tiles: Tile[][];
}