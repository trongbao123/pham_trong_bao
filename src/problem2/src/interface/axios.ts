type RequestType = {
    method: string,
    url: string,
    data?: any,
    params?: any
};

type MethodRequest = {
    id?: string | number,
    params?: any,
    data?: any
}

export enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}
export type {
    RequestType,
    MethodRequest
}