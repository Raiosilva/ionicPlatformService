import { Audit } from "./Audit.dto";

export class User extends Audit {
    name: string;
    email: string;
    photo: string;
    phone: string;
    password: string;
    confirmPassword: string;
}