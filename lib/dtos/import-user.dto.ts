import { ROLES } from "../enums";

export interface IImportUser {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    role: ROLES;
}
  