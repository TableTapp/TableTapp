import axios, { AxiosError, AxiosResponse } from 'axios';

const apiBaseUrl = 'http://127.0.0.1:9090';
let accessToken : string = '';

const renewAccessToken = async () => {
    try {
        const res = await axios.post("http://127.0.0.1:9090/auth/refresh");
        return res.data.Token;
    }
    catch (error) {
        return error;
    }
}

axios.interceptors.request.use(config => {
    if (accessToken)
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
}, (error) => { Promise.reject(error); });

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error?.config;
        if (error?.response && error?.response?.status === 401 && 
            originalRequest) {
            // && !originalRequest._retry
            // originalRequest._retry = true;
            try {
                accessToken = await renewAccessToken();
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return axios(originalRequest);

            } catch (refreshError) {
                console.error(refreshError);
                throw refreshError;
            }
        }
        throw Promise.reject(error);
    }
);

// const sendRequest = async (url: string, payload: any = {}, token: string = "") => {

//     try {
//         return await axios.post(url, payload, {
//             headers: { Authorization: `Bearer ${token}` }
//         });
//     }
//     catch (error: any) {
//         if (error.response && error.response.status === 403) {
//             const newAccessToken = await renewAccessToken();
//             return await axios.post(url, payload, {
//                 headers: { Authorization: `Bearer ${newAccessToken}` }
//             });
//         } else {
//             console.error(error);
//         }
//     }
// }