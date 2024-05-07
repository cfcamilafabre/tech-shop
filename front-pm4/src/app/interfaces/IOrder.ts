import { IProduct } from "./IProduct";

export interface IOrder{
    id: number;
    date: Date;
    status: string;
    products: IProduct[];
}