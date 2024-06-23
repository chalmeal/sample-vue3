import { defineStore } from "pinia";

export type Api = {
  status: number;
  message: string;
  type: string;
};

export type Account = {
  id: string;
  name: string;
  avator: string;
  authority: string; // types
};

export const useStore = defineStore("app", {
  state: () => ({
    api: {
      status: 0,
      message: "",
      type: "",
    } as Api,
    account: {
      id: "",
      name: "",
      avator: "",
      authority: "",
    } as Account,
    logined: false as boolean,
  }),
  getters: {},
  actions: {},
});
