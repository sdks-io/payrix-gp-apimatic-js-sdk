import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Function3 = {
  Applicant: "APPLICANT",
  PaymentMethodOwner: "PAYMENT_METHOD_OWNER",
  BeneficialOwner: "BENEFICIAL_OWNER",
} as const;
export type Function3 = (typeof Function3)[keyof typeof Function3] | (string & {});

export const function3Schema: EnumSchema<Function3> = s.enumOf<Function3>(Function3);
