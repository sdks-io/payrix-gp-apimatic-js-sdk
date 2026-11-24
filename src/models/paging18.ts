import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "./data-dictionary-v1-pagination-order.js";

export type Paging18 = {
  /** The total number of records to return in a single page for a list. @default 5 */
  pageSize?: number;
  /**
   * Indicates the page sequence to return in the response. The number of records presented on each
   * page is determined by page_size field.1 means the first page, 2 the second and so on.
   *
   * @default 1
   */
  page?: number;
  /** The direction of the ordering of the entire list, ASC or DESC */
  order?: DataDictionaryV1PaginationOrder;
  /** The field to order the list by. @default "TIME_CREATED" */
  orderBy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paging18Schema: Schema<Paging18> = s.object<Paging18>(
  {
    pageSize: s.defaulted(s.float64(), 5),
    page: s.defaulted(s.float64(), 1),
    order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
    orderBy: s.defaulted(s.string(), "TIME_CREATED"),
    _keysMap: {
      pageSize: "page_size",
      orderBy: "order_by",
    },
  },
  { additionalProperties: s.json() },
);
