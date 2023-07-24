import axios from 'axios';
import { ICartPopulated, IItem, IItemPopulated, ITableBase } from '../utils/serverEntities';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:9090', // Replace with your backend domain
    withCredentials: true, // Allow cookies in cross-origin requests
});

async function postSignin(payload: any) {
    try {
        return await apiClient.post(`/auth/signin`, payload);
    } catch (error) {
        throw error;
    }
}

async function postSignup(payload: any) {
    try {
        return await apiClient.post(`/auth/signip`, payload);
    } catch (error) {
        throw error;
    }
}

async function getCart(id: string) {
    try {
        const response = await apiClient.get(`/cart/${id}`);
        const cartData: ICartPopulated = {
            OrderItems: response.data.result.OrderItems,
            TotalPrice: response.data.result.TotalPrice,
            _id: response.data.result._id
        };
        return cartData;
    }
    catch (error) {
        throw error;
    }
}

async function putCart(id: string | undefined, payload: any) {
    try {
        return (await apiClient.patch(`/cart/${id}`, payload)).data;
    } catch (error) {
        throw error;
    }
}

async function getItem(id: string, populate: boolean) {
    try {
        const response = await apiClient.get(`/item/${id}`);
        if (populate) {
            return <IItemPopulated> {
                _id: response.data.result._id,
                Name: response.data.result.Name,
                Description: response.data.result.Description,
                Price: response.data.result.Price,
                Category: {
                    Name: response.data.result.Category.Name,
                    _id: response.data.result.Category._id
                }
            };
        }
        else {
            return <IItem> {
                _id: response.data.result._id,
                Name: response.data.result.Name,
                Description: response.data.result.Description,
                Price: response.data.result.Price,
                Category: response.data.result.Category,
                AddOns: response.data.result.ItemAddOns
            };
        }
    }
    catch (error) {
        throw error;
    }
}

async function putItem(id: string, payload: any) {
    try {
        return (await apiClient.patch(`/orderItem/${id}`, payload)).data; 
    } catch (error) {
        throw error;
    }
}

async function postItem(payload: any) {
    try {
        return (await apiClient.post(`/orderItem/`, payload)).data; 
    } catch (error) {
        throw error;
    }  
}

async function getTable(id: string) {
    try {
        const tableResponse = await apiClient.get(`/table/${id}`);
        const table: ITableBase = {
            Customers: tableResponse.data.result.Customers,
            Status: tableResponse.data.result.Status,
            Seats: tableResponse.data.result.Seats,
            TableNumber: tableResponse.data.result.TableNumber
        };
        return table;
    } catch (error) {
        throw error;
    }

}

async function getMenu(id: string) {
    try {
        return (await apiClient.get(`/menu/${id}`)).data;
    } catch (error) {
        throw error;
    }
}


export default {
    postSignin,
    postSignup,
    getCart,
    putCart,
    getItem,
    postItem,
    putItem,
    getTable,
    getMenu
}