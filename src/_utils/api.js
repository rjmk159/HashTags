import axios from "axios";
const BASE_URL = "http://localhost:5555";

// export const login = async (email, password) => {
//   const response = await axios.post(`${BASE_URL}/authorize/login`, { email, password });
//   return response.data;
// };
// let api = {};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/authorize/login`, { email, password })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const register = (obj) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/authorize/register`, { ...obj })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
