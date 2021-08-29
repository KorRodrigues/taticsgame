export const emptyFloor: Tile = { type: 'floor', objectIn: undefined }

const map: GameMap = {
  name: 'map',
  tiles: ((new Array(3)).fill(
    ((new Array(3)).fill(
      ({...emptyFloor})
    ))
  )),
}

export default map;