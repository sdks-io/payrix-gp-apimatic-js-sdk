import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SplitAmountRequestTransfers = {
  /**
   * The amount that is being transferred. Represented in the lowest denomination of the currency
   * (i.e. $100.00 = 10000
   */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const splitAmountRequestTransfersProperties: s.Shape<SplitAmountRequestTransfers> = {
  amount: s.optional(s.string()),
};

export const splitAmountRequestTransfersInternalSchema: Schema<SplitAmountRequestTransfers> =
  s.object<SplitAmountRequestTransfers>(splitAmountRequestTransfersProperties, {
    additionalProperties: s.json(),
  });

export const splitAmountRequestTransfersSchema: Schema<SplitAmountRequestTransfers> = s.lazySchema(() =>
  s.object<SplitAmountRequestTransfers>(
    {
      ...splitAmountRequestTransfersProperties,
      amount: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
