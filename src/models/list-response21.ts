import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";
import {
  paymentMethods2InternalSchema,
  paymentMethods2Schema,
  type PaymentMethods2,
} from "./payment-methods2.js";

export type ListResponse21 = {
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
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  filter?: Filter1;
  paging?: Paging3;
  paymentMethods?: PaymentMethods2[];
  action?: Action48;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listResponse21Properties: s.Shape<ListResponse21> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter1Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethods2InternalSchema))),
  action: s.optional(s.lazy(() => action48Schema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    paymentMethods: "payment_methods",
  },
};

export const listResponse21InternalSchema: Schema<ListResponse21> = s.object<ListResponse21>(
  listResponse21Properties,
  { additionalProperties: s.json() },
);

export const listResponse21Schema: Schema<ListResponse21> = s.lazySchema(() =>
  s.object<ListResponse21>(
    {
      ...listResponse21Properties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethods2Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
