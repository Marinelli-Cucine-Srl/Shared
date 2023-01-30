import { BaseType } from '..';
import { ExtensionSide, HandleType, OvenType } from '../enums';

/**
 * Param to be provided in the body when requesting to GET /extensions
 * @interface
 * @alias IGetExtensions
 * @category Interfaces
 * @subcategory DTOs
 */
export interface IGetExtensions {
  side: ExtensionSide;

  kitchenBaseId: string;
  baseType: BaseType;

  sideOneFinal: number;
  sideTwoFinal?: number;

  handleType: HandleType;
  ovenType?: OvenType;

  sideOneExtensionIds?: string[];
  sideTwoExtensionIds?: string[];
}
