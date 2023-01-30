/**
 * Param to be provided in the body when requesting to GET /orders
 * @interface
 * @alias IGetOrders
 * @category Interfaces
 * @subcategory DTOs
 */
export interface IGetOrders {
  from?: string;
  to?: string;

  lang?: string;
  configId?: string;
  resellerId?: string;
}
