import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action9Schema, type Action9 } from "./action9.js";
import {
  actionsListSingleInternalSchema,
  actionsListSingleSchema,
  type ActionsListSingle,
} from "./actions-list-single.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";

export type ActionsList = {
  /**
   * The total number of records across all pages for the search filter. When searching for a
   * collection of resoures, this is returned on the first page only and when the date range is a
   * month or less.
   */
  totalRecordCount?: number;
  /**
   * The total number of records returned on the current page. If current_page_size is less than the
   * page_size using in the querystring then this is the final page for that search.
   */
  currentPageSize?: number;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  filter?: Filter1;
  paging?: Paging3;
  /** A list of action records. */
  actions?: ActionsListSingle[];
  action?: Action9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const actionsListProperties: s.Shape<ActionsList> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter1Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  actions: s.optional(s.array(s.lazy(() => actionsListSingleInternalSchema))),
  action: s.optional(s.lazy(() => action9Schema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
  },
};

export const actionsListInternalSchema: Schema<ActionsList> = s.object<ActionsList>(actionsListProperties, {
  additionalProperties: s.json(),
});

export const actionsListSchema: Schema<ActionsList> = s.lazySchema(() =>
  s.object<ActionsList>(
    {
      ...actionsListProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      actions: s.optional(s.array(s.lazy(() => actionsListSingleSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
