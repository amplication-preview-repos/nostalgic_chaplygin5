import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  createdAt?: SortOrder;
  followed?: SortOrder;
  followerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
