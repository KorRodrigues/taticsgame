import { emptyFloor } from './basicMap'

const biggerMap: GameMap = {
  name: 'map',
  tiles: (new Array(7)).fill(
    (new Array(7)).fill(
      ({...emptyFloor})
    )
  ),
}

export default biggerMap;