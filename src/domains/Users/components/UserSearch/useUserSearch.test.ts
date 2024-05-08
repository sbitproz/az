import { renderHook, waitFor } from "@testing-library/react";
import { useUserSearch } from "./useUserSearch";
import { act } from "react";

const searchValue = 'Some search value';
const mockOnSearchQuery = vi.fn();

describe("useUserSearch", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call onSearchQuery when onSearch is called", async () => {
    const { result } = renderHook(() => useUserSearch(mockOnSearchQuery));

    act(() => {
      result.current.onSearch(searchValue);
    });

    await waitFor(() =>
      expect(mockOnSearchQuery).toHaveBeenCalledWith(searchValue)
    );
  });

  it("should call onSearchQuery when onClear is called", async () => {
    const { result } = renderHook(() => useUserSearch(mockOnSearchQuery));

    act(() => {
      result.current.onSearch(searchValue);
    });

    await waitFor(() =>
      expect(mockOnSearchQuery).toHaveBeenCalledWith(searchValue)
    );

    vi.clearAllMocks();

    act(() => {
      result.current.onClear();
    });

    await waitFor(() => expect(mockOnSearchQuery).toHaveBeenCalledWith(""));
  });

  it("should return searchValue when search value is set", async () => {
    const { result } = renderHook(() => useUserSearch(mockOnSearchQuery));

    act(() => {
      result.current.onSearch(searchValue);
    });

    expect(result.current.searchValue).toBe(searchValue);
  });
});
