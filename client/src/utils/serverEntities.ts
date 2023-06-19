// Entities
export interface IItem {
    Id: string;
    Name: string;
    Category: string;
    Description: string;
    Price: number;
}
export interface IOrderItemBase {
    ItemId: string;
    Quantity: number;
}

export interface ICart {
    OrderItems: IOrderItemBase[];
    TotalPrice: number;
}

export interface ICustomer {
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    Email: string;
}

export interface IMenuBase {
    Category: string;
    Items: IItem[];
}


export interface IOrderBase {
    TableId: string;
    CustomerId: string;
    OrderItems: IOrderBase[];
    Status: string;
}


export interface ITableBase {
    Customers: string[];
    Status: string;
}

export interface IVendorBase {
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    Email: string;
}

// Response Types
export interface IItemResponse {
    results: IItem
}

export interface IOrderItemResponse {
    results: IOrderBase
}

export interface ICartResponse {
    results: ICart
}

export interface IMenuResponse {
    results: IMenuBase
}

export interface ITableResponse {
    results: ITableBase
}

