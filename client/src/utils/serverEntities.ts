export interface IAddOn {
    _id?: string;
    Name: string;
    Price: number;
}

interface ICategory {
    _id?: string;
    Name: string;
}

export interface IItem {
    _id?: string;
    Name: string;
    Category: string;
    Description: string;
    Price: number;
    AddOns?: IAddOn[];
}

export interface IItemPopulated {
    _id?: string;
    Name: string;
    Category: ICategory;
    Description: string;
    Price: number;
    AddOns?: IAddOn[];
}

export interface IOrderItem {
    _id?: string;
    ItemId: string;
    Quantity: number;
    AdditionalRequests?: string;
}

export interface IOrderItemPopulated {
    _id?: string;
    ItemId: IItem;
    Quantity: number;
    AdditionalRequests?: string;
}
export interface ICart {
    _id?: string;
    OrderItems: string[];
    TotalPrice: number;
}

export interface ICartPopulated {
    _id?: string;
    OrderItems: IOrderItemPopulated[];
    TotalPrice: number;
}

export interface ICustomer {
    _id?: string;
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    Email: string;
}

export interface IMenu {
    _id?: string;
    Items: string[];
}

export interface IMenuPopulated {
    _id?: string;
    Items: IItem[];
}


export interface IOrder {
    _id?: string;
    TableId: string | ITableBase;
    CustomerId: string | ICustomer;
    OrderItems: string[];
    Status: string;
}

enum TableStatus {
    Reserved = "RESERVED",
    Occupied = "OCCUPIED",
    Open = "OPEN",
}

export interface ITableBase {
    _id?: string;
    TableNumber: number;
    Customers: ICustomer[];
    Seats: number;
    Status: TableStatus;
}

export interface IVendorBase {
    _id?: string;
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    Email: string;
}