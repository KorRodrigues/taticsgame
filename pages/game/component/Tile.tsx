import React from "react";

interface TileProps {
  tile: Tile;
  onClick: () => void;
  children?: React.ReactNode;
}

const Tile = ({ onClick, tile, children }: TileProps) => (
  <span
    style={{ width: 50, height: 50, border: '1px solid #00000030', display: 'inline-block' }}
    onClick={onClick}
  >
    {tile.type}
    <p>{children}</p>
  </span>
)

export default Tile;