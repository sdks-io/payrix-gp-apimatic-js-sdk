import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The value to order the search list results by. */
export const OrderByFileProcessingQueryParamsOrderBy = {
  TimeCreated: "TIME_CREATED",
  Id: "ID",
} as const;
export type OrderByFileProcessingQueryParamsOrderBy =
  | (typeof OrderByFileProcessingQueryParamsOrderBy)[keyof typeof OrderByFileProcessingQueryParamsOrderBy]
  | (string & {});

export const orderByFileProcessingQueryParamsOrderBySchema: EnumSchema<OrderByFileProcessingQueryParamsOrderBy> =
  s.enumOf<OrderByFileProcessingQueryParamsOrderBy>(OrderByFileProcessingQueryParamsOrderBy);
