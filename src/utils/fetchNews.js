import React from "react";
import axios from "axios";

export const fetchNews = () => {
  return axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f7114dd2e5e43ba9d1654397cb3a0cb"
    )
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
