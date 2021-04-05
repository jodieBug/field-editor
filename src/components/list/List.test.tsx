import userEvent from "@testing-library/user-event";
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
    render(
      <List
        id="pokedex"
        title="Pokemon"
        listItems={pokemon}
        onClick={(field) => selectListItemMock(field)}
        active="pikachu"
      />
    );
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

  it("hilights the selected list item", () => {
    const activeItem = screen.getByText(/pikachu/i);
    const inactiveItem = screen.getByText(/squirtle/i);

    expect(activeItem).toHaveClass("active");
    expect(inactiveItem).not.toHaveClass("active");
  });

  it("calls the on click function with the correct arguement", () => {
    const item = screen.getByText(/charmander/i);
    userEvent.click(item);

    expect(selectListItemMock).toHaveBeenCalledWith("charmander");
    expect(selectListItemMock).toHaveBeenCalledTimes(1);
  });
});
