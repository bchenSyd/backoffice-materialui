// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

export const Get_API_HOST = () => {
    const {API_HOST} = window.__CONFIG__
    return API_HOST
}