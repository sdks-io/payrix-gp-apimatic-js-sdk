import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandBatchesBrandBreakdownBrandSchema,
  type BrandBatchesBrandBreakdownBrand,
} from "./brand-batches-brand-breakdown-brand.js";
import { fundingCredit1Schema, type FundingCredit1 } from "./funding-credit1.js";
import { fundingDebit1Schema, type FundingDebit1 } from "./funding-debit1.js";
import { refunds1Schema, type Refunds1 } from "./refunds1.js";
import { sales1Schema, type Sales1 } from "./sales1.js";

export type BrandBreakdownItem = {
  /** Indicates the card brand that this batch summary pertains to. */
  brand?: BrandBatchesBrandBreakdownBrand;
  /**
   * The batch amount that is an aggregation of all the transactions' amounts in the batch for this
   * brand. It is always represented in the lowest denomination of the related currency.
   */
  amount?: string;
  /** The number of transactions in the batch for this brand. */
  count?: number;
  /**
   * The amount that is an aggregation of all the transactions' gratuity amounts in the batch for
   * this brand. It is always represented in the lowest denomination of the related currency.
   */
  gratuityAmount?: string;
  sales?: Sales1;
  refunds?: Refunds1;
  fundingDebit?: FundingDebit1;
  fundingCredit?: FundingCredit1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const brandBreakdownItemSchema: Schema<BrandBreakdownItem> = s.object<BrandBreakdownItem>(
  {
    brand: s.optional(s.lazy(() => brandBatchesBrandBreakdownBrandSchema)),
    amount: s.optional(s.string()),
    count: s.optional(s.float64()),
    gratuityAmount: s.optional(s.string()),
    sales: s.optional(s.lazy(() => sales1Schema)),
    refunds: s.optional(s.lazy(() => refunds1Schema)),
    fundingDebit: s.optional(s.lazy(() => fundingDebit1Schema)),
    fundingCredit: s.optional(s.lazy(() => fundingCredit1Schema)),
    _keysMap: {
      gratuityAmount: "gratuity_amount",
      fundingDebit: "funding_debit",
      fundingCredit: "funding_credit",
    },
  },
  { additionalProperties: s.json() },
);
