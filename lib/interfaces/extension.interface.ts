/**
 * Interface representing the Extension that can be chosen during the
 * configuration flow by the user
 * @interface
 * @alias Extension
 * @category Interfaces
 * @subcategory Common
 */
export interface Extension {
  /** Unique id of the Extension */
  id: string;
  /** Absolute path of the static resource */
  imageUrl: string;
}
