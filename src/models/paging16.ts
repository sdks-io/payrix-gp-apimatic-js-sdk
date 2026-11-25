import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "./data-dictionary-v1-pagination-order.js";

export type Paging16 = {
  /**
   * Indicates the page sequence to return in the response. The number of records presented on each
   * page is determined by page_size field.1 means the first page, 2 the second and so on.
   *
   * @default 1
   */
  page?: number;
  /**
   * The total number of records to return in a single page for a list. The maximum this value can
   * be is 1000, meaning that the maximum number of records to return in a single request is 1000.
   *
   * @default 5
   */
  pageSize?: number;
  /**
   * The field to order the list by. Accepted values: `id`, `ARN`, `BRAND`, `STATUS`, `STAGE`,
   * `FROM_STAGE_TIME_CREATED`, `TO_STAGE_TIME_CREATED`, `ADJUSTMENT_FUNDING`,
   * `FROM_ADJUSTMENT_TIME_CREATED`, `TO_ADJUSTMENT_TIME_CREATED`.
   *
   * @default "FROM_STAGE_TIME_CREATED"
   */
  orderBy?: string;
  /** The direction of the ordering of the entire list, ASC or DESC */
  order?: DataDictionaryV1PaginationOrder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paging16Properties: s.Shape<Paging16> = {
  page: s.defaulted(s.float64(), 1),
  pageSize: s.defaulted(s.float64(), 5),
  orderBy: s.defaulted(s.string(), "FROM_STAGE_TIME_CREATED"),
  order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
  _keysMap: {
    pageSize: "page_size",
    orderBy: "order_by",
  },
};

export const paging16InternalSchema: Schema<Paging16> = s.object<Paging16>(paging16Properties, {
  additionalProperties: s.json(),
});

export const paging16Schema: Schema<Paging16> = s.lazySchema(() =>
  s.object<Paging16>(
    {
      ...paging16Properties,
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
    },
    { additionalProperties: s.json() },
  ),
);
