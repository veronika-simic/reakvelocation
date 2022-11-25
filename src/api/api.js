import { createAxionsInstance } from './apiHelper';
const axiosInstance = createAxionsInstance(
    'http://localhost:3003/'
);

export const getAllCountries = async () => {
    const response = await axiosInstance.get('/countries');
    console.log(response);
    return response;
};