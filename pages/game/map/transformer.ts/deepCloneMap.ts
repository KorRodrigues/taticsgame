import { cloneDeep } from 'lodash';

const deepCloneMap = (map: GameMap) => {
  return {
    ...cloneDeep(map),
    tiles: [
      ...map.tiles.map((col) => [...col.map((line) => cloneDeep(line))])
    ]
  } // Deep clone, but it is really deep
}

export default deepCloneMap;