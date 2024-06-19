export type Follower = {
  createdAt: Date;
  followed: string | null;
  follower?: Follower | null;
  followers?: Array<Follower>;
  id: string;
  updatedAt: Date;
};
