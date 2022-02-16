import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import List from "./List";

describe("App component", () => {
  it("should render list items", async () => {
    // const { rerender } =
    render(<List initialItems={["Matheus", "Filype", "Bessa"]} />);

    expect(screen.getByText("Bessa")).toBeInTheDocument();
    expect(screen.getByText("Filype")).toBeInTheDocument();
    expect(screen.getByText("Matheus")).toBeInTheDocument();

    //rerender(<List initialItems={["John"]} />);

    //    expect(screen.getByText("John")).toBeInTheDocument();
    //  expect(screen.queryByText("Matheus")).not.toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    render(<List initialItems={[]} />);

    const input = screen.getByPlaceholderText("Add New Item");
    const addButton = screen.getByText("Add");

    // type

    fireEvent.change(input, { target: { value: "Teste" } });

    fireEvent.click(addButton);

    expect(await screen.findByText("Teste")).toBeInTheDocument();
  });

  it("should be able to remove item to the list", async () => {
    render(<List initialItems={["Bessa"]} />);

    const removeButtons = screen.getAllByText("Remove");

    fireEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return screen.queryByText("Bessa");
    });
  });
});
