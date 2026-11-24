import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingCredit5Schema, type FundingCredit5 } from "./funding-credit5.js";
import { fundingDebit5Schema, type FundingDebit5 } from "./funding-debit5.js";

export type HostBreakdownItem = {
  /** The merchant name that is associated with the batch. */
  merchantName?: string;
  /** A reference for the batch from the host. */
  reference?: string;
  /**
   * The batch amount that is an aggregation of all the transactions' amounts in the batch. It is
   * always represented in the lowest denomination of the related currency.
   */
  amount?: string;
  /** The number of transactions in the batch. */
  count?: number;
  fundingDebit?: FundingDebit5;
  fundingCredit?: FundingCredit5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const hostBreakdownItemProperties: s.Shape<HostBreakdownItem> = {
  merchantName: s.optional(s.string()),
  reference: s.optional(s.string()),
  amount: s.optional(s.string()),
  count: s.optional(s.float64()),
  fundingDebit: s.optional(s.lazy(() => fundingDebit5Schema)),
  fundingCredit: s.optional(s.lazy(() => fundingCredit5Schema)),
  _keysMap: {
    merchantName: "merchant_name",
    fundingDebit: "funding_debit",
    fundingCredit: "funding_credit",
  },
};

export const hostBreakdownItemInternalSchema: Schema<HostBreakdownItem> = s.object<HostBreakdownItem>(
  hostBreakdownItemProperties,
  { additionalProperties: s.json() },
);

export const hostBreakdownItemSchema: Schema<HostBreakdownItem> = s.lazySchema(() =>
  s.object<HostBreakdownItem>(
    {
      ...hostBreakdownItemProperties,
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
