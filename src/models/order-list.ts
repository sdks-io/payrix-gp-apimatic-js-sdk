import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action43Schema, type Action43 } from "./action43.js";
import { filter8Schema, type Filter8 } from "./filter8.js";
import { order23Schema, type Order23 } from "./order23.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";

export type OrderList = {
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
  /** The merchant name of the account that sent the transfer. */
  merchantName?: string;
  /** A unique identifier for the account set by Global Payments. */
  accountId?: string;
  /** A unique identifier for the account set by Global Payments. */
  accountName?: string;
  filter?: Filter8;
  paging?: Paging3;
  orders?: Order23[];
  action?: Action43;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderListProperties: s.Shape<OrderList> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter8Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  orders: s.optional(s.array(s.lazy(() => order23Schema))),
  action: s.optional(s.lazy(() => action43Schema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const orderListInternalSchema: Schema<OrderList> = s.object<OrderList>(orderListProperties, {
  additionalProperties: s.json(),
});

export const orderListSchema: Schema<OrderList> = s.lazySchema(() =>
  s.object<OrderList>(
    {
      ...orderListProperties,
      paging: s.optional(s.lazy(() => paging3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
