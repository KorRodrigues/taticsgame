import type { NextPage } from 'next'
import gameMap from './game/map/basicMap'
import styles from '../styles/Home.module.css'
import Tile from './game/component/Tile';
import { useState } from 'react';
import addObjectToMap from './game/map/transformer.ts/addObjectToMap';

const Home: NextPage = () => {
  const [map, setMap] = useState<GameMap>(gameMap)
  const [key, setKey] = useState<string>(1)

  const addObject = (posX: number, posY: number) => {
    setMap(addObjectToMap(
      map,
      { name: 'Player ' + key, group: 'ally', blockPass: true, keyReference: key+'' }
      , posX, posY)
    )
    setKey(1 + key) 
  }

  const { name, tiles } = map;

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div>
        {tiles.map((column, i) => (
          <div key={i}>
            {column.map((line, j) => (
              <Tile tile={line} key={j} onClick={() => addObject(i, j)}>{line.objectIn?.name}</Tile>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
