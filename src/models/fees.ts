import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { feeInfoSchema, type FeeInfo } from "./fee-info.js";

export type Fees = {
  feeInfo?: FeeInfo[];
  /** Total fees charged calculated as total upfront fees + total recurring fees */
  totalAmount?: string;
  /** Total recurring fees for this installment plan. */
  totalSubsequentAmount?: string;
  /**
   * The consumer fee for every installment period, including the first one. This fee corresponds to
   * the feeType
   */
  subsequentAmount?: string;
  /**
   * Total upfront fees charged to the consumer for this installment plan. This is the amount
   * charged upfront along with the first installment principal only.
   */
  totalUpfrontAmount?: string;
  /** Upfront fees charged to the consumer for this installment plan. */
  upfrontAmount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const feesSchema: Schema<Fees> = s.object<Fees>(
  {
    feeInfo: s.optional(s.array(s.lazy(() => feeInfoSchema))),
    totalAmount: s.optional(s.string()),
    totalSubsequentAmount: s.optional(s.string()),
    subsequentAmount: s.optional(s.string()),
    totalUpfrontAmount: s.optional(s.string()),
    upfrontAmount: s.optional(s.string()),
    _keysMap: {
      feeInfo: "fee_info",
      totalAmount: "total_amount",
      totalSubsequentAmount: "total_subsequent_amount",
      subsequentAmount: "subsequent_amount",
      totalUpfrontAmount: "total_upfront_amount",
      upfrontAmount: "upfront_amount",
    },
  },
  { additionalProperties: s.json() },
);
