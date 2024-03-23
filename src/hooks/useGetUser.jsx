import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../utils/redux/slice/Auth";
import { useMatches, useNavigate } from "react-router-dom";
import { myAxios } from "../utils/axios";

export default function useGetUser() {
    const notAllowedPage = ["/profile", "/cart", "/edit-profile"];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const matcher = useMatches();

    useEffect(() => {
        async function getUserFromBackend() {
            try {
                const res = await myAxios.get("/api/users/getme", {
                    withCredentials: true,
                });
                dispatch(getUser({ ...res.data.data, isLoggedIn: true }));
            } catch (error) {
                const currentPath = matcher[1].pathname;
                if (notAllowedPage.find((d) => d === currentPath)) {
                    return navigate("/login", {
                        state: error.response.data.description,
                    });
                }
            }
        }
        getUserFromBackend();
    }, []);

    return user;
}
