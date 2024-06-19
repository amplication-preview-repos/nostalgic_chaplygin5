import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";

export type FollowerUpdateInput = {
  followed?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
};
