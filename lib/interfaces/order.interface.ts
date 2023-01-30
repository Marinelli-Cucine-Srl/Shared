/**
 * Order interface
 * @interface
 * @alias Order
 * @category Interfaces
 * @subcategory Common
 */
export interface Order {
  id: string;
  lang: string;
  resellerId: string;
  // Ordered configuration id
  configId: string;
  // The "frozen" price of the configuration
  configPrice: string;
  // The "frozen" price of the configuration
  configResellerCode: string;
  // The accessories chosen by the user with their respective ("frozen" prices)
  chosenAccessories: Array<{
    id: string;
    internalResellerCode: string;
    price: string;
  }>;
}
