import type { NextPage } from 'next'
import gameMap from './game/map/basicMap'
import styles from '../styles/Home.module.css'
import Tile from './game/component/Tile';

const Home: NextPage = () => {
  const { name, tiles } = gameMap;

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div>
        {tiles.map((column, i) => (
          <div key={i}>
            {column.map((line, j) => (
              <Tile tile={line} key={j}>{i} {j}</Tile>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
