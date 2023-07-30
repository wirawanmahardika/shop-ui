import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchGet(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return [data, setData];
}



