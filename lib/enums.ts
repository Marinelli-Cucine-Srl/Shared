/**
 * Node execution environment mode
 * @enum {string}
 * @alias NodeEnv
 * @category Enum
 */
export enum NodeEnv {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

/**
 * The possible choices for the Base type of the kitchen
 * @enum {string}
 * @alias BaseType
 * @category Enum
 */
export enum BaseType {
  LINEAR = 'linear',
  ANGULAR = 'angular',
}

/**
 * Possible roles for a user
 *
 * @enum {number}
 * @alias Roles
 * @category Enum
 */
export enum ROLES {
  BOTIKA = 'botika',
  ADMIN = 'admin',
}

/**
 * The image identifiers of the configuration in the precise order
 * @enum {string}
 * @alias ConfigurationImages
 * @category Enum
 */
export declare enum KitchenBaseImages {
  NORMAL = 0,
  MIRROR = 1,
}

/**
 * The image identifiers of the configuration in the precise order
 * @enum {string}
 * @alias ConfigurationImages
 * @category Enum
 */
export enum ConfigurationImages {
  GENERAL,
  GENERAL_REV,
  DIMENSIONAL,
  DIMENSIONAL_REV,
  AMBIENT,
  BROKEN,
  ACCESSORIZED,
  ACCESSORIZED_REV,
  COLORED,
}

/**
 * The possible choices for the Handle configuration
 * @enum {string}
 * @alias HandleType
 * @category Enum
 */
export enum HandleType {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
}

/**
 * The possible choices for the Oven positioning
 * @enum {string}
 * @alias OvenType
 * @category Enum
 */
export enum OvenType {
  UNDER = 'under',
  COLUMN = 'column',
}

/**
 * The possible installation/mounting direction of a configuration
 * @enum {string}
 * @alias PossibleDirection
 * @category Enum
 */
export enum PossibleDirection {
  BOTH = 'both',
  L2R = 'left2right',
  R2L = 'right2left',
}

/**
 * The sides for which can be requested a list of extension
 * @enum {string}
 * @alias ExtensionSide
 * @category Enum
 */
export enum ExtensionSide {
  SIDE_ONE = 'side_1',
  SIDE_TWO = 'side_2',
}

/**
 * The possible error category for data errors
 * @enum {string}
 * @alias LogType
 * @category Enum
 */
export enum LogType {
  CONFIG_CONFLICT = 'config-conflict',
  MISSING_CONFIG = 'config-missing',
  MISSING_RESOURCE = 'res-missing',
}
