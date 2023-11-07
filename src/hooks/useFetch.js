import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error(request.statusText);
        }
        const data = await request.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (err) {
        setError(err.massage);
        setIsPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, error, isPending };
};

export default useFetch;