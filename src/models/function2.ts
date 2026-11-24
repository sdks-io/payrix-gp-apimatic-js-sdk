import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Function2 = {
  AccountActivationFee: "ACCOUNT_ACTIVATION_FEE",
  PrimaryPayout: "PRIMARY_PAYOUT",
  SecondaryPayout: "SECONDARY_PAYOUT",
  Fees: "FEES",
} as const;
export type Function2 = (typeof Function2)[keyof typeof Function2] | (string & {});

export const function2Schema: EnumSchema<Function2> = s.enumOf<Function2>(Function2);
