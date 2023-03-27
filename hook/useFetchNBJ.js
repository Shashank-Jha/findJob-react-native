import { useState, useEffect } from "react";
import axios from "axios";

const useFetchNBJ = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "3582bc1779msh647472a6e1fad47p1c7b12jsne0bdc837b3dc",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        alert(`There is an error - ${error}`);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetchNBJ;
