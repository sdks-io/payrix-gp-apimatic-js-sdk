import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Functions5 = {
  Applicant: "APPLICANT",
  PaymentMethodOwner: "PAYMENT_METHOD_OWNER",
  BeneficialOwner: "BENEFICIAL_OWNER",
} as const;
export type Functions5 = (typeof Functions5)[keyof typeof Functions5] | (string & {});

export const functions5Schema: EnumSchema<Functions5> = s.enumOf<Functions5>(Functions5);
