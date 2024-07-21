
import axios, { AxiosRequestConfig } from "axios";
import handleError from "../utils/handle-errors";
import { DOMAIN } from "../configs/setting";
import { RequestType } from "../interface/axios";

const axiosInstance = axios.create({
    baseURL: DOMAIN,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    validateStatus: (status) => (status >= 200 && status <= 504),
});

const addTokenToRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
};

const handleRequestError = (error: any): Promise<never> => {
    const {
        error: errorResponse
    } = error || {};

    throw errorResponse
};

const sendRequest = async <T>(options: RequestType): Promise<T | undefined> => {
    const {
        method,
        url,
        data,
        params
    } = options || {};

    const config: AxiosRequestConfig = {
        url,
        method,
        data,
        params
    };

    try {
        const response = await axiosInstance(addTokenToRequest(config));

        const [data, error, statusText, status] = handleError(response);

        if (error) throw {
            error,
            status,
            statusText
        }

        return data
    } catch (errorResponse: any) {
        handleRequestError(errorResponse)
    }
};

export const request = async <T>(options: RequestType): Promise<T | undefined> => {
    return sendRequest<T>({ ...options });
};