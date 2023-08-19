import { useEffect, useState } from "react";
import { myAxios } from "../utils/axios";

export function useFetchGet(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    myAxios.get(url, { withCredentials: true }).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return [data, setData];
}



