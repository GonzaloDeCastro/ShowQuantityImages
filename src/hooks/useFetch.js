import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState({ loading: true, data: null });

  useEffect(() => {
    getDates(url);
  }, [url]);

  const getDates = async (url) => {
    try {
      setResult({ loading: true, data: null });
      const resp = await fetch(url);
      const data = await resp.json();
      setResult({ loading: false, data });
    } catch (e) {
      console.log(e);
    }
  };

  return result;
};

export default useFetch;
