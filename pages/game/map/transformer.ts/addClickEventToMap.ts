import deepCloneMap from "./deepCloneMap";

type clickEventFilterFunction = 
  (map: GameMapClickEvent, x: number, y: number) => boolean;
type clickEventFilter = 'any' | 'empty' | clickEventFilterFunction;

const filterEventAny:clickEventFilterFunction = () => {
  return true;
}

const filterEventEmpty:clickEventFilterFunction = (map, x, y) => {
  return !(map.tiles[x][y].objectIn);
}

const addClickEventToMap = (
  map: GameMap,
  originX: number,
  originY: number,
  range: number,
  event: () => any,
  filter: clickEventFilter = 'any',
): GameMapClickEvent => {
  let newMap: GameMapClickEvent = deepCloneMap(map);

  // TODO define filter
  let passFilter:clickEventFilterFunction;
  if (typeof(filter) === 'function') {
    passFilter = filter;
  } else {
    switch (filter) {
      case 'empty':
        passFilter = filterEventEmpty;
        break;
      case 'any':
      default:
        passFilter = filterEventAny;
    }
  }
  // TODO define filter

  // check top, bot, left, right of origin
  // each time check pass, add to newMap and recursively call addClickEventToMap
  // with -1 in range value and new originX and originY
  // Until range is equal to 0
  function internalAddClick(x: number, y: number, distance: number): void {
    // Check if range is over, map tile is invalid or if origin is already clickable
    if (distance === -1 || !(newMap.tiles[x]) || !(newMap.tiles[x][y])) {
      return;
    }

    if (!newMap.tiles[x][y].clickEvent) {
      newMap.tiles[x][y].clickEvent = event;
    }
  
    // Test adjacent of origin and if true set event and call recursively
    // Test left
    const leftX = x - 1;
    passFilter(newMap, leftX, y) && internalAddClick(leftX, y, distance -1)
    // Test top
    const topY = y - 1;
    passFilter(newMap, x, topY) && internalAddClick(x, topY, distance -1)
    // Test right
    const rightX = x + 1;
    passFilter(newMap, rightX, y) && internalAddClick(rightX, y, distance -1)
    // Test bottom
    const bottomY = y + 1;
    passFilter(newMap, x, bottomY) && internalAddClick(x, bottomY, distance -1)
  }

  internalAddClick(originX, originY, range);

  return newMap;
}

export default addClickEventToMap;