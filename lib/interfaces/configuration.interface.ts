import { Color, KitchenBase } from '..';
import { HandleType, OvenType, PossibleDirection } from '../enums';
import { Accessory } from './accessory.interface';
import { Extension } from './extension.interface';
import { Hob } from './hob.interface';

/**
 * Interface representing the final combination of base, color scheme and extension
 * that the user will choose once completed the whole flow on the Frontend
 * @interface
 * @alias Configuration
 * @category Interfaces
 * @subcategory Common
 */
export interface Configuration {
  id: string; // UID of the configuration
  eanCode: string; // EAN code of the configuration
  handleType: HandleType;
  ovenType: OvenType;
  hobs?: Hob[]; // List of hobs available for selection
  kitchenBase: KitchenBase; // The base chosen (reflects the color scheme)
  colors: Array<Color>;

  // An array of static assets for this configuration
  imagesUrl: Array<string>;

  // The verse in which the configuration could be installed (L2R, R2L or both)
  mountDirection: PossibleDirection;
  alternativeInstallation: boolean;

  sideOneExtensions: Array<Extension>; // The extension added to the base (side 1)
  sideTwoExtensions?: Array<Extension>; // The extension added to the base (side 2)
  accessories: Array<Accessory>; // The accessories added to the base
  colored_accessories?: Array<Accessory>; // The accessories added to the base

  // Dimension of the final configuration
  sideOneFinal: number;
  sideTwoFinal?: number; // Present only if the kitchen an Angular one
  isTopHeightOver: boolean; // Present only if >= 220cm
}
