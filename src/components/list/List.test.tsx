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

const selectListItemMock = jest.fn();

describe("list component", () => {
  beforeEach(() => {
    render(<List id="pokedex" title="Pokemon" listItems={pokemon} />);
  });

  it("renders a title", () => {
    expect(screen.getByText(/pokemon/i)).toBeInTheDocument();
  });

  it("displays a list of items", () => {
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
    expect(screen.getByText(/squirtle/i)).toBeInTheDocument();
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/jigglypuff/i)).toBeInTheDocument();
  });
});
