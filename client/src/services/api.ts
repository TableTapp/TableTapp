/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ICartPopulated, IItem, IItemPopulated, ITableBase } from '../utils/serverEntities';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:9090',
    withCredentials: true, // Allow cookies in cross-origin requests
});

async function postSignin(payload: any) {
    return await apiClient.post(`/auth/signin`, payload);
}

async function postSignup(payload: any, isCustomer: boolean = true) {
    try {
        const response = await apiClient.post(`/auth/signup`, payload);
        const userId = response.data.result.User;
        if (isCustomer)
            return await postCustomer({User: userId});
        return await postVendor({User: userId});
    } catch (error) {
        throw error;
    }
}

async function postVendor(payload: any) {
    try {
        return await apiClient.post(`/vendor/`, payload);
    } catch (error) {
        throw error;
    }
}

async function postCustomer(payload: any) {
    try {
        return await apiClient.post(`/customer/`, payload);
    } catch (error) {
        throw error;
    }
}

async function getCart(id: string) {
    const response = await apiClient.get(`/cart/${id}`);
    const cartData: ICartPopulated = {
        OrderItems: response.data.result.OrderItems,
        TotalPrice: response.data.result.TotalPrice,
        _id: response.data.result._id
    };
    return cartData;
}

async function putCart(id: string | undefined, payload: any) {
    return (await apiClient.patch(`/cart/${id}`, payload)).data;
}

async function getItem(id: string, populate: boolean) {
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

async function putItem(id: string, payload: any) {
    return (await apiClient.patch(`/orderItem/${id}`, payload)).data; 
}

async function postItem(payload: any) {
    return (await apiClient.post(`/orderItem/`, payload)).data; 
}

async function getTable(id: string) {
    const tableResponse = await apiClient.get(`/table/${id}`);
    const table: ITableBase = {
        Customers: tableResponse.data.result.Customers,
        Status: tableResponse.data.result.Status,
        Seats: tableResponse.data.result.Seats,
        TableNumber: tableResponse.data.result.TableNumber
    };
    return table;
}

async function getMenu(id: string) {
    return (await apiClient.get(`/menu/${id}`)).data;
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