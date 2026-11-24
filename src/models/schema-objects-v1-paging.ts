import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1PaginationOrderBySchema,
  type DataDictionaryV1PaginationOrderBy,
} from "./data-dictionary-v1-pagination-order-by.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "./data-dictionary-v1-pagination-order.js";

/** The paging values used to generate this response. */
export type SchemaObjectsV1Paging = {
  /**
   * Indicates the page sequence to return in the response. The number of records presented on each
   * page is determined by page_size field.
   *
   * @default 1
   */
  page?: number;
  /** The total number of objects to return in a single page for that list. @default 5 */
  pageSize?: number;
  /** The value to order the entire list by. */
  orderBy?: DataDictionaryV1PaginationOrderBy;
  /** The direction of the ordering of the entire list, ASC or DESC */
  order?: DataDictionaryV1PaginationOrder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const schemaObjectsV1PagingProperties: s.Shape<SchemaObjectsV1Paging> = {
  page: s.defaulted(s.float64(), 1),
  pageSize: s.defaulted(s.float64(), 5),
  orderBy: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderBySchema)),
  order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
  _keysMap: {
    pageSize: "page_size",
    orderBy: "order_by",
  },
};

export const schemaObjectsV1PagingInternalSchema: Schema<SchemaObjectsV1Paging> =
  s.object<SchemaObjectsV1Paging>(schemaObjectsV1PagingProperties, { additionalProperties: s.json() });

export const schemaObjectsV1PagingSchema: Schema<SchemaObjectsV1Paging> = s.lazySchema(() =>
  s.object<SchemaObjectsV1Paging>(
    {
      ...schemaObjectsV1PagingProperties,
      page: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
    },
    { additionalProperties: s.json() },
  ),
);
