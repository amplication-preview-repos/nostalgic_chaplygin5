import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";

export type FollowerCreateInput = {
  followed?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
};
