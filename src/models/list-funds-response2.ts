import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action31InternalSchema, action31Schema, type Action31 } from "./action31.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import {
  fundsListRealTimeItem3InternalSchema,
  fundsListRealTimeItem3Schema,
  type FundsListRealTimeItem3,
} from "./funds-list-real-time-item3.js";
import { paging18Schema, type Paging18 } from "./paging18.js";

export type ListFundsResponse2 = {
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
  /**
   * A unique identifier for the merchant set by Global Payments.
   *
   * @default "MER_880c34767b184d5e82b10e767201e648"
   */
  merchantId?: string;
  /** This is a label to identify the merchant */
  merchantName?: string;
  /** The account identifier for the account that sent a transfer. */
  accountId?: string;
  /** The account name for the account that sent a transfer. */
  accountName?: string;
  filter?: Filter1;
  paging?: Paging18;
  funds?: FundsListRealTimeItem3[];
  action?: Action31;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listFundsResponse2Properties: s.Shape<ListFundsResponse2> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.defaulted(s.string(), "MER_880c34767b184d5e82b10e767201e648"),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter1Schema)),
  paging: s.optional(s.lazy(() => paging18Schema)),
  funds: s.optional(s.array(s.lazy(() => fundsListRealTimeItem3InternalSchema))),
  action: s.optional(s.lazy(() => action31InternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const listFundsResponse2InternalSchema: Schema<ListFundsResponse2> = s.object<ListFundsResponse2>(
  listFundsResponse2Properties,
  { additionalProperties: s.json() },
);

export const listFundsResponse2Schema: Schema<ListFundsResponse2> = s.lazySchema(() =>
  s.object<ListFundsResponse2>(
    {
      ...listFundsResponse2Properties,
      merchantId: s.defaulted(
        s.string().check(s.minLength(1), s.maxLength(50)),
        "MER_880c34767b184d5e82b10e767201e648",
      ),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      funds: s.optional(s.array(s.lazy(() => fundsListRealTimeItem3Schema))),
      action: s.optional(s.lazy(() => action31Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
