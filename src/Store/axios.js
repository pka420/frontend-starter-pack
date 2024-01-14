import axios from "axios";

const baseURL = window.location.origin;

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        if (typeof error.response === "undefined") {
            return Promise.reject(error);
        }

        if (error.response.status === 401 ) {
            console.log("unauthorized")
            return Promise.reject(error);
        } else {
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;

