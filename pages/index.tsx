import type { NextPage } from 'next'
import gameMap from './game/map/basicMap'
import styles from '../styles/Home.module.css'
import Tile from './game/component/Tile';
import { useState } from 'react';
import addObjectToMap from './game/map/transformer.ts/addObjectToMap';
import MoveObjectThroughMap from './game/map/transformer.ts/MoveObjectThroughMap';

const Home: NextPage = () => {
  const [map, setMap] = useState<GameMap>(gameMap)
  const [key, setKey] = useState<number>(1)
  const [selectedObjectPosition, setSelectedObjectPosition] = useState<[number?, number?]>([])

  // When click on a Tile
  const clickInTile = (posX: number, posY: number) => {
    // If the tile is not empty
    if (map.tiles[posX][posY].objectIn !== undefined) { 
      // if has an object selected show error feedback
      if (selectedObjectPosition[0] !== undefined && selectedObjectPosition[1] !== undefined) {
        // TODO error to move object
      } else {
        // Set the selected object to move in next click
        setSelectedObjectPosition([posX, posY])
      }
    // else (if the tile is empty)
    } else {
      // if has an object selected and move the object to this tile
      if (selectedObjectPosition[0] !== undefined && selectedObjectPosition[1] !== undefined) {
        setMap(MoveObjectThroughMap(
          map,
          selectedObjectPosition[0],
          selectedObjectPosition[1],
          posX,
          posY,
        ))
        setSelectedObjectPosition([]) 
      // else (add an object to the tile)
      } else {
        setMap(addObjectToMap(
          map,
          { name: 'Player ' + key, group: 'ally', blockPass: true, keyReference: key+'' }
          , posX, posY)
        )
        setKey(1 + key)
      }
    }
  }

  const { name, tiles } = map;

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div>
        {tiles.map((column, i) => (
          <div key={i}>
            {column.map((line, j) => (
              <Tile tile={line} key={j} onClick={() => clickInTile(i, j)}>{line.objectIn?.name}</Tile>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
