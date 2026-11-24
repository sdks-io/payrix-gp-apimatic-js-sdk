import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action56Schema, type Action56 } from "./action56.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";
import { reportSchema, type Report } from "./report.js";

export type SummaryReport2 = {
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
  filter?: Filter1;
  paging?: Paging3;
  reports?: Report[];
  action?: Action56;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const summaryReport2Properties: s.Shape<SummaryReport2> = {
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter1Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  reports: s.optional(s.array(s.lazy(() => reportSchema))),
  action: s.optional(s.lazy(() => action56Schema)),
  _keysMap: {
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const summaryReport2InternalSchema: Schema<SummaryReport2> = s.object<SummaryReport2>(
  summaryReport2Properties,
  { additionalProperties: s.json() },
);

export const summaryReport2Schema: Schema<SummaryReport2> = s.lazySchema(() =>
  s.object<SummaryReport2>(
    {
      ...summaryReport2Properties,
      merchantId: s.optional(s.string().check(s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
