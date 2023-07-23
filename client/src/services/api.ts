import axios, { AxiosError, AxiosResponse } from 'axios';
import { ICartPopulated, IItem, IItemPopulated, ITableBase } from '../utils/serverEntities';

const apiBaseUrl = 'http://127.0.0.1:9090';

async function getCart(id: string) {
    try {
        const response = await axios.get(`${apiBaseUrl}/cart/${id}`);
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
        return (await axios.patch(`${apiBaseUrl}/cart/${id}`, payload)).data;
    } catch (error) {
        throw error;
    }
}

async function getItem(id: string, populate: boolean) {
    try {
        const response = await axios.get(`${apiBaseUrl}/item/${id}`);
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
        return (await axios.patch(`${apiBaseUrl}/orderItem/${id}`, payload)).data; 
    } catch (error) {
        throw error;
    }
}

async function postItem(payload: any) {
    try {
        return (await axios.post(`${apiBaseUrl}/orderItem/`, payload)).data; 
    } catch (error) {
        throw error;
    }  
}

async function getTable(id: string) {
    try {
        const tableResponse = await axios.get(`${apiBaseUrl}/table/${id}`);
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
        return (await axios.get(`${apiBaseUrl}/menu/${id}`)).data;
    } catch (error) {
        throw error;
    }
}


export default {
    getCart,
    putCart,
    getItem,
    postItem,
    putItem,
    getTable,
    getMenu
}