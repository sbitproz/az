import { User } from "@/api/hooks/users.types";

export const mockUser = {
  name: {
    title: "Mr",
    first: "Sebastian",
    last: "Silva",
  },
  location: {
    city: "Boise",
    state: "New Jersey",
  },
  email: "sebastian.silva@example.com",
  dob: {
    date: "1956-05-21T04:02:40.864Z",
    age: 67,
  },
  registered: {
    date: "2021-06-15T14:13:29.119Z",
    age: 2,
  },
  phone: "(329) 449-6469",
  cell: "(848) 863-4315",
  id: {
    name: "SSN",
    value: "780-89-7852",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/80.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/80.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
  },
} as User;
