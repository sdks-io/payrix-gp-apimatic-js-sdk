import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  actionSettlementReportingInternalSchema,
  actionSettlementReportingSchema,
  type ActionSettlementReporting,
} from "./action-settlement-reporting.js";
import { filter15Schema, type Filter15 } from "./filter15.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";
import {
  transactionsListItemInternalSchema,
  transactionsListItemSchema,
  type TransactionsListItem,
} from "./transactions-list-item.js";

export type SettlementTransactionsResponse = {
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
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific merchant. Begins with the three letters,
   * MER.
   */
  merchantId?: string;
  /** A meaningful label that better identifies the merchant. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments */
  accountId?: string;
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  filter?: Filter15;
  paging?: Paging3;
  transactions?: TransactionsListItem[];
  /** Information about the Action executed. */
  action?: ActionSettlementReporting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const settlementTransactionsResponseProperties: s.Shape<SettlementTransactionsResponse> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter15Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  transactions: s.optional(s.array(s.lazy(() => transactionsListItemInternalSchema))),
  action: s.optional(s.lazy(() => actionSettlementReportingInternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const settlementTransactionsResponseInternalSchema: Schema<SettlementTransactionsResponse> =
  s.object<SettlementTransactionsResponse>(settlementTransactionsResponseProperties, {
    additionalProperties: s.json(),
  });

export const settlementTransactionsResponseSchema: Schema<SettlementTransactionsResponse> = s.lazySchema(() =>
  s.object<SettlementTransactionsResponse>(
    {
      ...settlementTransactionsResponseProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      transactions: s.optional(s.array(s.lazy(() => transactionsListItemSchema))),
      action: s.optional(s.lazy(() => actionSettlementReportingSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
