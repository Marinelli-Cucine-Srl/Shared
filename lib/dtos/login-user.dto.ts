/**
 * Param to be provided in the body when requesting to POST /auth/login
 * @interface
 * @alias ILoginUser
 * @category Interfaces
 * @subcategory DTOs
 */
 export interface ILoginUser {
    username: string;
    password: string;
  }
  