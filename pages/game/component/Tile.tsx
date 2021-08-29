import React from "react";

interface TileProps {
  tile: Tile;
  onClick: () => void;
  children?: React.ReactNode;
}

const Tile = ({ onClick, tile, children }: TileProps) => (
  <div
    style={{ width: 100, height: 100, border: '1px solid #00000030' }}
    onClick={onClick}
  >
    {tile.type}
    <p>{children}</p>
  </div>
)

export default Tile;