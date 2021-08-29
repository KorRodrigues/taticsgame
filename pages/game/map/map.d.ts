interface FloorObject {
  name: string;
  group: 'ally' | 'enemy' | 'neutral';
  blockPass: boolean;
  keyReference: string;
}

interface Tile {
  type: 'floor' | 'wall';
  objectIn?: FloorObject;
}

interface TileClickEvent extends Tile {
  clickEvent?: () => void | GameMap;
}

interface GameMap {
  name: string;
  tiles: Tile[][];
}

interface GameMapClickEvent extends GameMap {
  tiles: TileClickEvent[][];
}