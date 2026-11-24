import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  actionTransactionsInternalSchema,
  actionTransactionsSchema,
  type ActionTransactions,
} from "./action-transactions.js";
import { filterTransactionsSchema, type FilterTransactions } from "./filter-transactions.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";
import {
  transactionsListRealTimeItemInternalSchema,
  transactionsListRealTimeItemSchema,
  type TransactionsListRealTimeItem,
} from "./transactions-list-real-time-item.js";

export type TransactionsListRealTime = {
  /**
   * The total number of records across all pages for the search filter. When searching for a
   * collection of resources, this is returned on the first page only and when the date range is a
   * month or less.
   */
  totalRecordCount?: number;
  /**
   * The total number of records returned on the current page. If current_page_size is less than the
   * page_size using in the querystring then this is the final page for that search.
   */
  currentPageSize?: number;
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific merchant. Begins with the three letters,
   * MER.
   */
  merchantId?: string;
  /** A meaningful label that better identifies the merchant. */
  merchantName?: string;
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific account. Begins with the three letters,
   * TRA.
   */
  accountId?: string;
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  /**
   * Indicates what fields and values used to filter the current list of resource objects in the
   * current response.
   */
  filter?: FilterTransactions;
  paging?: Paging3;
  transactions?: TransactionsListRealTimeItem[];
  /** Information about the Action executed. */
  action?: ActionTransactions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionsListRealTimeProperties: s.Shape<TransactionsListRealTime> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filterTransactionsSchema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  transactions: s.optional(s.array(s.lazy(() => transactionsListRealTimeItemInternalSchema))),
  action: s.optional(s.lazy(() => actionTransactionsInternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const transactionsListRealTimeInternalSchema: Schema<TransactionsListRealTime> =
  s.object<TransactionsListRealTime>(transactionsListRealTimeProperties, { additionalProperties: s.json() });

export const transactionsListRealTimeSchema: Schema<TransactionsListRealTime> = s.lazySchema(() =>
  s.object<TransactionsListRealTime>(
    {
      ...transactionsListRealTimeProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      transactions: s.optional(s.array(s.lazy(() => transactionsListRealTimeItemSchema))),
      action: s.optional(s.lazy(() => actionTransactionsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
