import { RequestStatus } from "./enums/RequestStatus.dto";
import { ServiceProvider } from "./ServiceProvider.dto";
import { SubCategory } from "./SubCategory.dto";
import { User } from "./User.dto";

export class RequestOrder {
    longlat: string;
    title: string;
    description: string;
    statusOrder: RequestStatus;
    customer: User;
    subcategory: SubCategory;
    serviceProvider: ServiceProvider;
}