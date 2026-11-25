import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action24InternalSchema, action24Schema, type Action24 } from "./action24.js";
import {
  disputesFilterInternalSchema,
  disputesFilterSchema,
  type DisputesFilter,
} from "./disputes-filter.js";
import { disputes2InternalSchema, disputes2Schema, type Disputes2 } from "./disputes2.js";
import { paging16InternalSchema, paging16Schema, type Paging16 } from "./paging16.js";

export type DisputesResponse = {
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
  /** A meaningful label for the merchant set by Global Payments */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  filter?: DisputesFilter;
  paging?: Paging16;
  /** A list of disputes */
  disputes?: Disputes2[];
  action?: Action24;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const disputesResponseProperties: s.Shape<DisputesResponse> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => disputesFilterInternalSchema)),
  paging: s.optional(s.lazy(() => paging16InternalSchema)),
  disputes: s.optional(s.array(s.lazy(() => disputes2InternalSchema))),
  action: s.optional(s.lazy(() => action24InternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const disputesResponseInternalSchema: Schema<DisputesResponse> = s.object<DisputesResponse>(
  disputesResponseProperties,
  { additionalProperties: s.json() },
);

export const disputesResponseSchema: Schema<DisputesResponse> = s.lazySchema(() =>
  s.object<DisputesResponse>(
    {
      ...disputesResponseProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      filter: s.optional(s.lazy(() => disputesFilterSchema)),
      paging: s.optional(s.lazy(() => paging16Schema)),
      disputes: s.optional(s.array(s.lazy(() => disputes2Schema))),
      action: s.optional(s.lazy(() => action24Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
