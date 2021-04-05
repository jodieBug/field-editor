import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { FieldEditor } from "./FieldEditor";

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
    const useButton = screen.getByText("> Use");
    const removeButton = screen.getByText("< Remove");
    expect(useButton).toBeDisabled();
    expect(removeButton).toBeDisabled();
  });
});
