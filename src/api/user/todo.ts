import { axios } from "../axios";

type Todo = {
  TaskID: number;
  AccountID: string;
  Title: string;
  Detail: string;
  Category: string;
  Status: string;
  ExpiredAt: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
};

type GetResponse = {
  Result: Todo;
  Error: string;
};

type GetResponses = {
  Result: Todo[];
  Error: string;
};

type PostResponse = {
  Error: string;
};

export const GetTodo = (id: string): Promise<GetResponse> => {
  return axios.get("/todo/" + id);
};
