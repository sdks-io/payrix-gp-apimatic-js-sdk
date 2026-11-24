import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Functions4 = {
  AccountActivationFee: "ACCOUNT_ACTIVATION_FEE",
  PrimaryPayout: "PRIMARY_PAYOUT",
  SecondaryPayout: "SECONDARY_PAYOUT",
  Fees: "FEES",
} as const;
export type Functions4 = (typeof Functions4)[keyof typeof Functions4] | (string & {});

export const functions4Schema: EnumSchema<Functions4> = s.enumOf<Functions4>(Functions4);
