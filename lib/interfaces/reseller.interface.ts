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

  /** Feature flag: show Marinelli and MIMO logo in the homepage */
  show_mrn_logos: boolean;
  /** Feature flag: determines if Planner is embedded in an iframe */
  is_embedded_in_iframe: boolean;
  /** Feature flag: allows the app to send order data from the iframe to the host site */
  allow_message_to_host: boolean;
}
