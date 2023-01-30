/**
 * Interface representing an item price details
 * @interface
 * @alias Reseller
 * @category Interfaces
 * @subcategory Common
 */
export interface PriceInformations {
  // Product identification code
  productId: string;
  // Unit price of the product
  price: string;
  // International reseller code
  internalResellerCode: string;
  // URL to the detail page in the reseller website
  productUrl?: string;
}
