import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderBy2Schema, type OrderBy2 } from "./order-by2.js";
import { order19Schema, type Order19 } from "./order19.js";

/** The paging state applied to the search. */
export type Paging17 = {
  /** The maximum number of results returned per page. */
  pageSize?: number;
  /** The page number of results returned, indexed from 1. */
  page?: number;
  /** The order in which the results are returned. */
  order?: Order19;
  /** The value used to order the results. */
  orderBy?: OrderBy2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paging17Schema: Schema<Paging17> = s.object<Paging17>(
  {
    pageSize: s.optional(s.int()),
    page: s.optional(s.int()),
    order: s.optional(s.lazy(() => order19Schema)),
    orderBy: s.optional(s.lazy(() => orderBy2Schema)),
    _keysMap: {
      pageSize: "page_size",
      orderBy: "order_by",
    },
  },
  { additionalProperties: s.json() },
);
