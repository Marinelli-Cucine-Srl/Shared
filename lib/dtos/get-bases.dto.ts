import { BaseType, HandleType, OvenType, PossibleDirection } from '../enums';

/**
 * Param to be provided in the body when requesting to GET /kitchen-bases
 * @interface
 * @alias IGetBases
 * @category Interfaces
 * @subcategory DTOs
 */
export interface IGetBases {
  resellerId: string;

  baseType: BaseType;
  mountDirection: PossibleDirection;

  sideOneFinal?: number;
  handleType: HandleType;
  ovenType?: OvenType;
}
