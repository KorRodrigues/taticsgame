import { cloneDeep } from "lodash";
import deepCloneMap from "./deepCloneMap";


const addObjectToMap = (map: GameMap, object: FloorObject, posX: number, posY: number): GameMap => {
  const newMap = deepCloneMap(map),
    newObject = cloneDeep(object);
  
  if (
    newMap.tiles[posX] === undefined
    || newMap.tiles[posX][posY] === undefined
  ) {
    throw new Error('Position does´t exist');
  }
  
  if (newMap.tiles[posX][posY].objectIn !== undefined) {
    throw new Error('Position is not empty');
  }

  newMap.tiles[posX][posY].objectIn = newObject;

  return newMap;
}

export default addObjectToMap;