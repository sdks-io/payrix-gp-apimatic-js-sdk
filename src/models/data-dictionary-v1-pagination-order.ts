import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The direction of the ordering of the entire list, ASC or DESC */
export const DataDictionaryV1PaginationOrder = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type DataDictionaryV1PaginationOrder =
  | (typeof DataDictionaryV1PaginationOrder)[keyof typeof DataDictionaryV1PaginationOrder]
  | (string & {});

export const dataDictionaryV1PaginationOrderSchema: EnumSchema<DataDictionaryV1PaginationOrder> =
  s.enumOf<DataDictionaryV1PaginationOrder>(DataDictionaryV1PaginationOrder);
