import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FunctionsMerchantsPersonsFunction = {
  Applicant: "APPLICANT",
  PaymentMethodOwner: "PAYMENT_METHOD_OWNER",
  BeneficialOwner: "BENEFICIAL_OWNER",
} as const;
export type FunctionsMerchantsPersonsFunction =
  | (typeof FunctionsMerchantsPersonsFunction)[keyof typeof FunctionsMerchantsPersonsFunction]
  | (string & {});

export const functionsMerchantsPersonsFunctionSchema: EnumSchema<FunctionsMerchantsPersonsFunction> =
  s.enumOf<FunctionsMerchantsPersonsFunction>(FunctionsMerchantsPersonsFunction);
