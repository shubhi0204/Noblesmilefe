import React from "react";
import { Outlet } from "react-router-dom";

import Authentication from "../layout/Authentication";

function AppLayout() {
  // const navigate = useNavigate();

  // const token =
  //   useSelector((state) => state.auth.token) || localStorage.getItem("token");

  // const user = JSON.parse(localStorage.getItem("user"));

  // const isOnboard = user?.isOnboard;

  // useEffect(
  //   function () {
  //     token && !isOnboard && navigate("/category");
  //   },
  //   [navigate, isOnboard, token]
  // );

  return (
    <div className="flex w-[100vw] bg-[#fff]">
      {true ? <Outlet /> : <Authentication />}
    </div>
  );
}

export default AppLayout;
