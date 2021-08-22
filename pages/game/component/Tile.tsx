import React from "react";

interface TileProps {
  tile: Tile;
  children?: React.ReactNode;
}

const Tile = ({ tile, children }: TileProps) => (
  <span
    style={{ width: 50, height: 50, border: '1px solid #00000030', display: 'inline-block' }}
  >
    {tile.type}
    {children}
  </span>
)

export default Tile;