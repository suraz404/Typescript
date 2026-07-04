import type { Info } from "../type";
import { type FC } from "react";

type userInfoPlus = {
  user: Info;
};

const UserInfo: FC<userInfoPlus> = ({ user }) => {
  return (
    <div>
      <h1>{user.id}</h1>
      <h2>{user.name}</h2>
    </div>
  );
};

export default UserInfo;
