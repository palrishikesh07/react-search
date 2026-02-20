import React, { useEffect, useState } from "react";

const useFetchAPI = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAPIData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data?.users);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAPIData(url);
  }, []);
  return {
    data,
    loading,
    error,
  };
};

export default useFetchAPI;
