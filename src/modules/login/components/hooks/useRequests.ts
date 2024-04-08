import axios from "axios";
import React from "react";

export const useRequests = () => {
  const [loading, setLoding] = React.useState(false);

  const getRequest = async (url: string) => {
    setLoding(true);
    const result = await axios({
      method: "get",
      url,
    })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch(() => {
        alert("erro no get");
      });

    setLoding(false);
    return result;
  };
  const postRequest = async (url: string, body: any) => {
    setLoding(true);
    const result = await axios({
      method: "post",
      url,
      data: body,
    })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch(() => {
        alert("erro no post");
      });
    setLoding(false);
    return result;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
