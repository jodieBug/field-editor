import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { FieldEditor } from "./FieldEditor";
import { Provider } from "react-redux";
import { store } from "../../app/store";

let useButton: HTMLElement;
let removeButton: HTMLElement;

describe("field editor", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FieldEditor />
      </Provider>
    );

    useButton = screen.getByText("> Use");
    removeButton = screen.getByText("< Remove");
  });

  it("renders with the correct components", () => {
    expect(screen.getByText(/The Editor/i)).toBeInTheDocument();
    expect(document.querySelector("#list_definitions")).toBeInTheDocument();
    expect(document.querySelector("#list_selected_fields")).toBeInTheDocument();
    expect(screen.getByText("> Use")).toBeInTheDocument();
    expect(screen.getByText("< Remove")).toBeInTheDocument();
  });

  it("should have disabled buttons when no items are selected", () => {
    expect(useButton).toBeDisabled();
    expect(removeButton).toBeDisabled();
  });

  it("should enable the use button when a list item is selected in the definitions list", () => {
    const item = screen.getByText(/AlertType/i);
    userEvent.click(item);

    expect(useButton).not.toBeDisabled();
    expect(removeButton).toBeDisabled();
  });

  it("selected list should contain the selected definition after clicking use", () => {
    const item = screen.getByText(/AlertType/i);
    userEvent.click(item);
    userEvent.click(useButton);

    expect(
      within(
        document.querySelector("#list_selected_fields") as HTMLElement
      ).getByText(/AlertType/i)
    ).toBeInTheDocument();
  });

  it("definitions list should not contain the selected definition after clicking use", () => {
    const item = screen.getByText(/AlertType/i);
    userEvent.click(item);
    userEvent.click(useButton);

    expect(
      within(
        document.querySelector("#list_definitions") as HTMLElement
      ).queryByText(/AlertType/i)
    ).toBeNull();
  });

  it("should enable the remove button when a list item is selected in the selected fields list", () => {
    const item = screen.getByText(/AlertType/i);
    userEvent.click(item);
    userEvent.click(useButton);
    const selectedItem = screen.getByText(/AlertType/i);
    userEvent.click(selectedItem);

    expect(removeButton).not.toBeDisabled();
    expect(useButton).toBeDisabled();
  });
});
