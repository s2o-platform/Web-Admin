export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "superadmin";
};

export type RestaurantStatus = "pending" | "approved" | "rejected";

export type Restaurant = {
  id: string;
  name: string;
  ownerName: string;
  email: string;
  status: RestaurantStatus;
  createdAt: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
};
