import { fireEvent, render, screen } from "@testing-library/react";
import { UserSearch } from "./UserSearch";
import { useUserSearch } from "./useUserSearch";
vi.mock("./useUserSearch");

const mockOnSearch = vi.fn();
const mockOnClear = vi.fn();

vi.mocked(useUserSearch).mockReturnValue({
  onClear: mockOnClear,
  onSearch: mockOnSearch,
  searchValue: "some text",
});

const mockOnSearchQuery = vi.fn();

describe("UserSearch", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call onSearch when input value changes", () => {
    render(<UserSearch onSearchQuery={mockOnSearchQuery} />);

    fireEvent.change(screen.getByRole("search"), { target: { value: "test" } });

    expect(mockOnSearch).toBeCalledWith("test");
  });

  it("should call onClear when Clear button is clicked", () => {
    render(<UserSearch onSearchQuery={mockOnSearchQuery} />);

    fireEvent.click(screen.getByText("Clear"));

    expect(mockOnClear).toBeCalled();
  });

  it("should render search value in input", () => {
    render(<UserSearch onSearchQuery={mockOnSearchQuery} />);

    expect(screen.getByRole("search")).toHaveValue("some text");
  });
});
