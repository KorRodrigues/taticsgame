import { cloneDeep } from 'lodash';

const addObjectToMap = (map: GameMap, object: FloorObject, posX: number, posY: number): GameMap => {
  const newMap = cloneDeep(map),
    newObject = cloneDeep(object);
  
  newMap.tiles[posX][posY].objectIn = newObject;

  return newMap;
}

export default addObjectToMap;