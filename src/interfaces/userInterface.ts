import { IAddress } from "./addresInterface";
import { ICompany } from "./companyInterface";

export interface IUser {
    address: IAddress,
    company: ICompany,
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
}