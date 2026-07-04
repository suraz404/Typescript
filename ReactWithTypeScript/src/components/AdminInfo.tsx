import type { FC } from "react";
import type { AdminInfo } from "../type";

type AdminInfoL = {
  admin: AdminInfo;
};
const AdminInfo: FC<AdminInfoL> = ({ admin }) => {
  return (
    <div>
      <h1>{admin.name}</h1>
    </div>
  );
};

export default AdminInfo;
