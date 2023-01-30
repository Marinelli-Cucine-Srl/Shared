/**
 * Interface representing the Accessory that can be chosen during the
 * configuration flow by the user
 * @interface
 * @alias Accessory
 * @category Interfaces
 * @subcategory Common
 */
export interface Accessory {
  /** Unique id of the Accessory */
  id: string;
  /** Absolute path of the static resource */
  imageUrl: string;
  /** Absolute path of the static resource */
  withConfigUrl?: string;
}
