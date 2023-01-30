import { BaseType } from '../enums';

/**
 * Interface representing the starting point of the configuration flow, this is
 * the foundation from which the user will start the configuration on the Frontend
 * @interface
 * @alias KitchenBase
 * @category Interfaces
 * @subcategory Common
 */
export interface KitchenBase {
  id: string;
  baseType: BaseType;

  // List of reseller that could present this base (and its configurations) to their clients
  allowedResellers: Array<string>;

  // Color scheme data, first,second,third (they're name/id of the colors)
  firstColor: string;
  secondColor: string;
  thirdColor: string;

  // Images
  imageUrl: string[];

  // The base initial dimensions
  sideOne: number;
  sideTwo?: number;
  
  // The base max dimensions
  maxSideOne: number;
  maxSideTwo?: number;
}
