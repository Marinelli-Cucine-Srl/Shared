/**
 * Interface representing a reseller who sells Marinelli products.
 * @interface
 * @alias Reseller
 * @category Interfaces
 * @subcategory Common
 */
export interface Reseller {
  /** Entity unique key */
  id: string;
  /** Name */
  name: string;
  /** Absolute logo url */
  logoUrl: string;
  /** Absolute image url for background in intro page */
  introBgUrl: string;
  /** Primary colour: used to customize the UI */
  color: string;
  /** Website absolute url */
  websiteUrl: string;
  /** Countries in which the user can sell */
  countries: string[];
  /** Countries in which the user can sell */
  show_mrn_logos: boolean;
}
