import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { refundsSchema, type Refunds } from "./refunds.js";
import { salesSchema, type Sales } from "./sales.js";

export type FundingDebit5 = {
  sales?: Sales;
  refunds?: Refunds;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingDebit5Schema: Schema<FundingDebit5> = s.object<FundingDebit5>(
  {
    sales: s.optional(s.lazy(() => salesSchema)),
    refunds: s.optional(s.lazy(() => refundsSchema)),
  },
  { additionalProperties: s.json() },
);
