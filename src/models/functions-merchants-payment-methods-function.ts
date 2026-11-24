import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FunctionsMerchantsPaymentMethodsFunction = {
  AccountActivationFee: "ACCOUNT_ACTIVATION_FEE",
  PrimaryPayout: "PRIMARY_PAYOUT",
  SecondaryPayout: "SECONDARY_PAYOUT",
  Fees: "FEES",
} as const;
export type FunctionsMerchantsPaymentMethodsFunction =
  | (typeof FunctionsMerchantsPaymentMethodsFunction)[keyof typeof FunctionsMerchantsPaymentMethodsFunction]
  | (string & {});

export const functionsMerchantsPaymentMethodsFunctionSchema: EnumSchema<FunctionsMerchantsPaymentMethodsFunction> =
  s.enumOf<FunctionsMerchantsPaymentMethodsFunction>(FunctionsMerchantsPaymentMethodsFunction);
