import axios from "axios";

const api = {
  callApi(
    url: string,
    method: string,
    success: Function,
    data?: any,
    error?: Function,
  ) {
    console.log(process.env.REACT_APP_API_BASE_URL);
    axios({
      url: process.env.REACT_APP_API_BASE_URL + url,
      method: method,
      data: data,
      withCredentials: true,
    })
      .then((data) => {
        success(data);
      })
      .catch((err) => {
        console.log(err);
        if (error) error(err);
      });
  },
};

export default api;
