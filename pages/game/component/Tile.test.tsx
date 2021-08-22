/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "../../../utils/test-utils";
import Tile from "./Tile";

describe("Tile", () => {
  it("should render the tile", () => {
    render(<Tile tile={{ type: 'floor' }} />);

    const tile = screen.getByText(
      /floor/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(tile).toBeInTheDocument();
  });
});