import { createAxionsInstance } from "./apiHelper";
const axiosInstance = createAxionsInstance("http://localhost:3003/");

export const getAllCountries = async () => {
  const response = await axiosInstance.get("/countries");
  return response;
};

export const getAllCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response;
};
