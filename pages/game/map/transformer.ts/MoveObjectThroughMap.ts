import { cloneDeep } from 'lodash';

const MoveObjectThroughMap = (
  map: GameMap,
  posX: number,
  posY: number,
  newPosX: number,
  newPosY: number,
): GameMap => {
  const newMap = {
    ...cloneDeep(map),
    tiles: [
      ...map.tiles.map((col) => [...col.map((line) => cloneDeep(line))])
    ]
  } // Deep clone, but it is really deep
  
  if (
    newMap.tiles[posX] === undefined
    || newMap.tiles[posX][posY] === undefined
  ) {
    throw new Error('Current position does´t exist');
  }

  if (
    newMap.tiles[newPosX] === undefined
    || newMap.tiles[newPosX][newPosY] === undefined
  ) {
    throw new Error('Target position does´t exist');
  }
  
  if (newMap.tiles[posX][posY].objectIn === undefined) {
    throw new Error('Current position is empty');
  }
  
  if (newMap.tiles[newPosX][newPosY].objectIn !== undefined) {
    throw new Error('Target position is not empty');
  }

  const movingObject = newMap.tiles[posX][posY].objectIn;
  newMap.tiles[posX][posY].objectIn = undefined;
  newMap.tiles[newPosX][newPosY].objectIn = movingObject;

  return newMap;
}

export default MoveObjectThroughMap;