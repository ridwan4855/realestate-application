import axios, { Axios } from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "d3596157d4msh38fe5ad69e05cb6p195d8cjsn60ec62953444",
    },
  });

  return data;
};
