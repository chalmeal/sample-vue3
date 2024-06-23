import { ref } from "vue";
import Axios, { AxiosError } from "axios";
import { useStore } from "../store/store";

const store = useStore();

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_ROOT,
  headers: {
    Authorization: "",
  },
});

axios.interceptors.request.use(
  (res) => {
    return res.data;
  },
  (err: AxiosError) => {
    const res = err.response;
    if (res) {
      switch (res?.status) {
        case 200:
          ref((store.api.status = 200));
          // TODO: APIからResultが取得できているか
          // res.data["Response"]["Result"] !== null ?
          // ref((store.api.message = res.data["Response"]["Result"])) : ""
          break;
        case 400:
          ref((store.api.status = 400));
          ref((store.api.type = "ERROR"));
          console.log(res.data);
          break;
        case 401:
          ref((store.api.status = 401));
          ref((store.api.type = "ERROR"));
          console.log(res.data);
          break;
        default:
          ref((store.api.status = 500));
          ref((store.api.type = "ERROR"));
          console.log(res.data);
      }
    } else {
    }
    return Promise.reject(err);
  },
);
