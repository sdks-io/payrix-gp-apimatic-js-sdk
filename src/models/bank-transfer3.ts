import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bank3InternalSchema, bank3Schema, type Bank3 } from "./bank3.js";

export type BankTransfer3 = {
  /** Data relating to a bank transfer directly to or from the Payer's bank account. */
  maskedAccountNumberLast4?: string;
  bank?: Bank3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankTransfer3Properties: s.Shape<BankTransfer3> = {
  maskedAccountNumberLast4: s.optional(s.string()),
  bank: s.optional(s.lazy(() => bank3InternalSchema)),
  _keysMap: {
    maskedAccountNumberLast4: "masked_account_number_last4",
  },
};

export const bankTransfer3InternalSchema: Schema<BankTransfer3> = s.object<BankTransfer3>(
  bankTransfer3Properties,
  { additionalProperties: s.json() },
);

export const bankTransfer3Schema: Schema<BankTransfer3> = s.lazySchema(() =>
  s.object<BankTransfer3>(
    {
      ...bankTransfer3Properties,
      maskedAccountNumberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      bank: s.optional(s.lazy(() => bank3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
