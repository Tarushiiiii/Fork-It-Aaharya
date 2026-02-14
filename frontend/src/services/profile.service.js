import api from "./api";

export const createProfile = async (data) => {
  const response = await api.post("/profile", data);
  return response.data;
};
