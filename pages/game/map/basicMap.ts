const emptyFloor: Tile = { type: 'floor', objectIn: undefined }

const map: GameMap = {
  name: 'map',
  tiles: [
    [emptyFloor, emptyFloor, emptyFloor],
    [emptyFloor, emptyFloor, emptyFloor],
    [emptyFloor, emptyFloor, emptyFloor],
  ]
}

export default map;