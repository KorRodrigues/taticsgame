/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "../utils/test-utils";
import Home from "./index";

describe("Tile", () => {
  it("should render the tile", () => {
    render(<Home />);

    const tile = screen.getByText(
      /map/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(tile).toBeInTheDocument();
  });
});