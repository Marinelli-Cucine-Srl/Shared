/**
 * Param to be provided in the body when requesting to POST /auth/login
 * @interface
 * @alias IRefreshAccessToken
 * @category Interfaces
 * @subcategory DTOs
 */
 export interface IRefreshAccessToken {
    refresh_token: string;
  }
  