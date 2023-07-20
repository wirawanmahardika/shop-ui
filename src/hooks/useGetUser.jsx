import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reduxSlice/Auth";

export default function useGetUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/users/getme", { withCredentials: true })
      .then((res) => {
        dispatch(getUser({ ...res.data.data, isLoggedIn: true }));
      })
      .catch((res) => true);
  }, []);

  return user;
}
