/**
 * Param to be provided in the query when paginating data
 * @interface
 * @alias PaginationOpt
 * @category Interfaces
 * @subcategory Common
 */
export interface PaginationOpt {
  /** Index from where we want to start getting the result */
  offset?: number;
  
  /** Max number of results */
  limit?: number;
  
  /** Object fields to be searched */
  filters?: Array<string>;

  /** The search string to be matched */
  search?: string;
}
