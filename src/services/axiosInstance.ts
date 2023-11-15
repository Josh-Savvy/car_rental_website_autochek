import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL,
	headers: {},
});
export default axiosInstance;
