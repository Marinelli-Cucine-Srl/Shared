import { ROLES } from "..";

/**
 * User data
 *
 * @interface
 * @alias User
 * @category Interfaces
 * @subcategory Common
 */
 export interface User {
  /** Identification key */
  id: string;
  /** User's name */
  firstname: string;
  /** User's lastname */
  lastname: string;
  /** User's role */
  role: ROLES;
}