import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action58InternalSchema, action58Schema, type Action58 } from "./action58.js";
import { filter14Schema, type Filter14 } from "./filter14.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";
import {
  settledDisputesListItemInternalSchema,
  settledDisputesListItemSchema,
  type SettledDisputesListItem,
} from "./settled-disputes-list-item.js";

export type SettledDisputesList = {
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
  filter?: Filter14;
  paging?: Paging3;
  /** A list of disputes */
  disputes?: SettledDisputesListItem[];
  action?: Action58;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const settledDisputesListProperties: s.Shape<SettledDisputesList> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter14Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  disputes: s.optional(s.array(s.lazy(() => settledDisputesListItemInternalSchema))),
  action: s.optional(s.lazy(() => action58InternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const settledDisputesListInternalSchema: Schema<SettledDisputesList> = s.object<SettledDisputesList>(
  settledDisputesListProperties,
  { additionalProperties: s.json() },
);

export const settledDisputesListSchema: Schema<SettledDisputesList> = s.lazySchema(() =>
  s.object<SettledDisputesList>(
    {
      ...settledDisputesListProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      disputes: s.optional(s.array(s.lazy(() => settledDisputesListItemSchema))),
      action: s.optional(s.lazy(() => action58Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
