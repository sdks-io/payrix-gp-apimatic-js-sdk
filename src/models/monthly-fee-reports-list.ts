import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action57Schema, type Action57 } from "./action57.js";
import { filter13Schema, type Filter13 } from "./filter13.js";
import {
  monthlyFeeReportSingleInternalSchema,
  monthlyFeeReportSingleSchema,
  type MonthlyFeeReportSingle,
} from "./monthly-fee-report-single.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";

export type MonthlyFeeReportsList = {
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
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  filter?: Filter13;
  paging?: Paging3;
  /** A list of Monthly Fee Report records. */
  monthlyFees?: MonthlyFeeReportSingle[];
  action?: Action57;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const monthlyFeeReportsListProperties: s.Shape<MonthlyFeeReportsList> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter13Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  monthlyFees: s.optional(s.array(s.lazy(() => monthlyFeeReportSingleInternalSchema))),
  action: s.optional(s.lazy(() => action57Schema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    monthlyFees: "monthly_fees",
  },
};

export const monthlyFeeReportsListInternalSchema: Schema<MonthlyFeeReportsList> =
  s.object<MonthlyFeeReportsList>(monthlyFeeReportsListProperties, { additionalProperties: s.json() });

export const monthlyFeeReportsListSchema: Schema<MonthlyFeeReportsList> = s.lazySchema(() =>
  s.object<MonthlyFeeReportsList>(
    {
      ...monthlyFeeReportsListProperties,
      merchantId: s.optional(s.string().check(s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      monthlyFees: s.optional(s.array(s.lazy(() => monthlyFeeReportSingleSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
