/**
 * Param to be provided in the body when requesting to GET /config/colors
 * @interface
 * @alias IGetColors
 * @category Interfaces
 * @subcategory DTOs
 */
export interface IGetColors {
  configId: string;
  resellerId: string;
  accessories?: Array<string>;
  colors?: Array<string>;
}
