import axios from "axios";
import {Cookies} from "react-cookie";

export const httpRequest = async (
  method,
  url,
  body,
  headers,
  isReactQuery = false,
  base = "https://api.hillzusers.com"
) => {
    const getToken = () => {
        const cook = new Cookies();
        return cook.get("token");
      };
      const removeToken = (key) => {
        const cook = new Cookies();
        return cook.remove(key);
      };
    const token = getToken();
  try {
    const _res = await axios({
      method: method,
      url: base + url,
      data: body,
      headers: {
        "content-type": "application/json",
        ...headers,
      },
    });
    const status = await _res.status;
    if (status === 200 || status === 201) {
      if (isReactQuery) {
        const { data } = await _res;
        return data;
      } else {
        return {
          status: _res.status,
          message: "Succesfull",
          data: _res.data,
        };
      }
    }
  } catch (e) {
    if (e.response.status === 401) {
      removeToken("token");
      return {
        status: e.response.status,
        message: e.response.data.message,
        data: null,
      };
    } else {
      return {
        status: e.response.status,
        message: e.response.data.message,
        data: null,
      };
    }
  }
};