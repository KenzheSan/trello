import { useState } from "react";
import { BASE_URL } from "../general";
const useFetch = () => {
  const [getUserData, setGetUserData] = useState();
  const getUsers = async (url) => {
    const response = await fetch(`${BASE_URL}${url}`);
    const result = await response.json();
    const data = [];
    for (const key in result) {
      data.push({
        id: key,
        email: result[key].email,
        password: result[key].password,
      });
    }
    setGetUserData(data);
    console.log(result);
  };
  return {
    getUsers,
    getUserData,
  };
};

export default useFetch;
