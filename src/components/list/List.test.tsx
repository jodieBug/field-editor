import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "./List";

const pokemon = [
  "bulbasaur",
  "charmander",
  "squirtle",
  "pikachu",
  "jigglypuff",
];

describe("list component", () => {
  beforeEach(() => {
    render(<List id="pokedex" title="Pokemon" listItems={pokemon} />);
  });

  it("renders a title", () => {
    expect(screen.getByText(/pokemon/i)).toBeInTheDocument();
  });
});
