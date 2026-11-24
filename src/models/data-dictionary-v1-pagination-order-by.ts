import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The value to order the entire list by. */
export const DataDictionaryV1PaginationOrderBy = {
  TimeCreated: "TIME_CREATED",
} as const;
export type DataDictionaryV1PaginationOrderBy =
  | (typeof DataDictionaryV1PaginationOrderBy)[keyof typeof DataDictionaryV1PaginationOrderBy]
  | (string & {});

export const dataDictionaryV1PaginationOrderBySchema: EnumSchema<DataDictionaryV1PaginationOrderBy> =
  s.enumOf<DataDictionaryV1PaginationOrderBy>(DataDictionaryV1PaginationOrderBy);
