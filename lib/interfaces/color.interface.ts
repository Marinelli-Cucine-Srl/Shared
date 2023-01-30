/**
 * Interface representing the Color that can be chosen during the
 * configuration flow by the user
 * @interface
 * @alias Color
 * @category Interfaces
 * @subcategory Common
 */
export interface Color {
  /** Unique id/name of the Color */
  id: string;
  /** Absolute path of the static resource */
  imageUrl: string;
}
