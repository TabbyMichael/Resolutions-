export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "personal",
    name: "Personal",
    color: "#33C3F0",
    icon: "user"
  },
  {
    id: "work",
    name: "Work",
    color: "#0FA0CE",
    icon: "briefcase"
  },
  {
    id: "health",
    name: "Health",
    color: "#1EAEDB",
    icon: "heart"
  },
  {
    id: "education",
    name: "Education",
    color: "#0EA5E9",
    icon: "book-open"
  },
  {
    id: "finance",
    name: "Finance",
    color: "#7E69AB",
    icon: "wallet"
  }
];