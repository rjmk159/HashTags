import axios from "axios";
const BASE_URL = "http://localhost:5555";

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

export const upload = (data, authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/file/upload`, data , { headers: {
        Authorization: authToken
      }})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const list = (authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/file/list`, { headers: {
        Authorization: authToken
      }})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const download = (id,authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/file/download?docId=${id}`, { headers: {
        Authorization: authToken
      }})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
