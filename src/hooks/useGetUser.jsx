import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../slice/Auth";
import { useMatches, useNavigate } from "react-router-dom";

export default function useGetUser() {
  const notAllowedPage = ["/profile", "/cart", "/edit-profile"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const matcher = useMatches();

  useEffect(() => {
    async function getUserFromBackend() {
      try {
        const res = await axios.get("http://localhost:1000/api/users/getme", {
          withCredentials: true,
        });
        dispatch(getUser({ ...res.data.data, isLoggedIn: true }));
      } catch (error) {
        if (notAllowedPage.find((d) => d === matcher[0].pathname)) {
          return navigate("/login", { state: error.response.data.description });
        }
      }
    }
    getUserFromBackend();
  }, []);

  return user;
}
