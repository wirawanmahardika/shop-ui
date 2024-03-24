import { useEffect, useState } from "react";
import { myAxios } from "../utils/axios";

export default function useGetPreview(category) {
    const [data, setData] = useState([]);

    useEffect(() => {
        myAxios
            .get("/api/preview/" + category)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return data;
}
