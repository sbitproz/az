import { renderHook } from "@testing-library/react";
import { useUsers } from "./useUsers";
import { useUserApi } from "@/api/hooks/useUserApi";
import { act } from "react";
vi.mock("@/api/hooks/useUserApi");

type UseUserApiReturnType = ReturnType<typeof useUserApi>;

const mockFetchUsers = vi.fn();

vi.mocked(useUserApi).mockReturnValue({
  fetchUsers: mockFetchUsers,
  data: [],
  isLoading: false,
  error: "",
} as UseUserApiReturnType);

describe("useUsers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call fetchUsers with initial query values", () => {
    renderHook(useUsers);

    expect(mockFetchUsers).toHaveBeenCalledWith(1, 10, "");
  });

  it("should call fetchUsers when onTableChange is called with current and pagination",  () => {
    const { result } = renderHook(useUsers);

    act(() => {
      result.current.onTableChange({ current: 5, pageSize: 15 });
    });

    expect(mockFetchUsers).toBeCalledWith(5, 15, "");
  });

  it("should not call fetchUsers when onTableChange is called with only current", () => {
    const { result } = renderHook(useUsers);

    act(() => {
      result.current.onTableChange({ current: 5 });
    });

    expect(mockFetchUsers).not.toBeCalledTimes(2);
  });

  it("should not call fetchUsers when onTableChange is called with only pageSize", () => {
    const { result } = renderHook(useUsers);

    act(() => {
      result.current.onTableChange({ pageSize: 15 });
    });

    expect(mockFetchUsers).not.toBeCalledTimes(2);
  });

  it("should clear search value when setting the pagination values", () => {
    const { result } = renderHook(useUsers);

    act(() => {
      result.current.onSearchQuery("bananas");
      result.current.onTableChange({ current: 5, pageSize: 15 });
    });

    expect(result.current.queryValues.search).toBe("");
  });

  it("should call fetchUsers when onSearchQuery is called", () => {
    const { result } = renderHook(useUsers);

    act(() => {
      result.current.onSearchQuery("bananas");
    });

    expect(mockFetchUsers).toBeCalledWith(1, 10, "bananas");
  });

  it("should reset current pagination to 1 when onSearchQuery is called", () => {
    const { result } = renderHook(useUsers);

    act(() => {
      result.current.onTableChange({ current: 5, pageSize: 15 });
      result.current.onSearchQuery("bananas");
    });

    expect(result.current.queryValues.current).toBe(1);
  });
});
