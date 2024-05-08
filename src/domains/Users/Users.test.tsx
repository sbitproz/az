import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { useUsers } from "./useUsers";
import { getRowKey } from "./Users.util";
import { mockUser } from "./__mocks__/mockUser";
vi.mock("./components/UserSearch/UserSearch", () => ({
  UserSearch: () => <>User Search</>,
}));
vi.mock("./useUsers");
vi.mock("./Users.util");

type UseUsersProps = ReturnType<typeof useUsers>;

const mockOnSearchQuery = vi.fn();
const mockOnTableChange = vi.fn();

const mockUseUsersValues: UseUsersProps = {
  isLoading: false,
  onSearchQuery: mockOnSearchQuery,
  onTableChange: mockOnTableChange,
  queryValues: { current: 1, pageSize: 10, search: "" },
  totalUserCount: 1000,
  users: [mockUser],
};

vi.mocked(useUsers).mockReturnValue(mockUseUsersValues);

describe("Users", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should match snapshot", () => {
    const { container } = render(<Users />);

    expect(container).toMatchSnapshot();
  });

  it("should render user's name", () => {
    render(<Users />);

    expect(screen.getByText(/Sebastian/)).toBeInTheDocument();
    expect(screen.getByText(/Silva/)).toBeInTheDocument();
    expect(screen.getByText(/Mr/)).toBeInTheDocument();
  });

  it("should render user's dob  date and age", () => {
    render(<Users />);

    expect(screen.getByText("05/21/1956")).toBeInTheDocument();
    expect(screen.getByText("(Age 67)")).toBeInTheDocument();
  });

  it("should render user's location", () => {
    render(<Users />);

    expect(screen.getByText("Boise,")).toBeInTheDocument();
    expect(screen.getByText("New Jersey")).toBeInTheDocument();
  });

  it("should render user's telephone and cell numbers", () => {
    render(<Users />);

    expect(screen.getByText("(848) 863-4315")).toBeInTheDocument();
    expect(screen.getByText("(329) 449-6469")).toBeInTheDocument();
  });

  it("should render user's registered date and age", () => {
    render(<Users />);

    expect(screen.getByText("06/15/2021")).toBeInTheDocument();
    expect(screen.getByText("(2 years ago)")).toBeInTheDocument();
  });

  it("should render loading when is loading is true", () => {
    vi.mocked(useUsers).mockReturnValue({
      ...mockUseUsersValues,
      isLoading: true,
    });

    render(<Users />);

    const antTableSpinner = document.querySelector(".ant-spin-spinning");

    expect(antTableSpinner).toBeDefined();
  });

  it("should not render loading when is loading is false", () => {
    vi.mocked(useUsers).mockReturnValue({
      ...mockUseUsersValues,
      isLoading: false,
    });

    render(<Users />);

    const antTableSpinner = document.querySelector(".ant-spin-spinning");

    expect(antTableSpinner).toBeNull();
  });

  it("should show error when error occurs", () => {
    vi.mocked(useUsers).mockReturnValue({
      ...mockUseUsersValues,
      isLoading: false,
    });

    vi.mocked(getRowKey).mockImplementation(() => {
      throw new Error("Error");
    });

    render(<Users />);

    expect(screen.getByTestId("error-image")).toBeInTheDocument();
  });

  it("should render UserSearch component", () => {
    render(<Users />);

    expect(screen.getByText("User Search")).toBeInTheDocument();
  });
});
