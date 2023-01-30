/**
 * Param to be provided in the body when requesting to GET /prices
 * @interface
 * @alias IGetBases
 * @category Interfaces
 * @subcategory DTOs
 */
export interface IGetPrices {
  /** The ids of the products */
  ids?: Array<string>;
  /** The id of the reseller from which is coming the request */
  resellerId?: string;
  /** The lang/country code of the user/place from where the request is coming */
  lang?: string;
}
