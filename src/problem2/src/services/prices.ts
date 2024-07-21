import { Method, MethodRequest } from "../interface/axios";
import { request } from "../supports/axios";

const pricesApi = async (options: MethodRequest) => {
    return await request({
        method: Method.GET,
        url: '/prices.json',
        ...options
    })
}

export default pricesApi;