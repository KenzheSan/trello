import React, { useEffect } from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";
import Header from "../header/Header";
import ListItemMap from "../list/ListItemMap";
import { Route, Routes } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
function Routing() {
  const { getUserData, getUsers } = useFetch();
  const get = async () => getUsers("/users.json");
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<SignInForm getUserData={getUserData} get={get} />}
        ></Route>
        <Route
          path="login"
          element={<SignUpForm getUserData={getUserData} />}
        ></Route>
        <Route path="list" element={<ListItemMap />}/>
      </Routes>
    </div>
  );
}

export default Routing;
