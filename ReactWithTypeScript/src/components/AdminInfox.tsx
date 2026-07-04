import type { FC } from "react";
import type { AdminInfo } from "../type";

type AdminInfoL = {
  admin: AdminInfo;
};
const AdminInfoM: FC<AdminInfoL> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Info</h2>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Admin: {admin.admin}</p>
      <p>Server: {admin.server}</p>
    </div>
  );
};

export default AdminInfoM;
