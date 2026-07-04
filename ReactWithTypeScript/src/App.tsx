// import Button from "./components/Button";

import AdminInfoM from "./components/AdminInfox";
import UserInfo from "./components/UserInfo";
const user = {
  id: 1,
  name: "Suraz",
  email: "suraz@gmail.com",
};
const admin = {
  id: 2,
  name: "Admin",
  email: "admin@server.com",
  admin: "CsitServer",
  server: 2,
};

export const App = () => {
  return (
    <div>
      {/* <Button
        label="Click"
        isDisabled={false}
        onClick={() => alert("You clicked")}

      /> */}
      <UserInfo user={user} />
      <AdminInfoM admin={admin} />
    </div>
  );
};
