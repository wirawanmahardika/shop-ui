import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchGet(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return [data, setData];
}
