import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SaferPaymentNonComplianceFeeManagedModel = {
  _0: 0,
  _1: 1,
} as const;
export type SaferPaymentNonComplianceFeeManagedModel =
  | (typeof SaferPaymentNonComplianceFeeManagedModel)[keyof typeof SaferPaymentNonComplianceFeeManagedModel]
  | (number & {});

export const saferPaymentNonComplianceFeeManagedModelSchema: EnumSchema<SaferPaymentNonComplianceFeeManagedModel> =
  s.enumOf<SaferPaymentNonComplianceFeeManagedModel>(SaferPaymentNonComplianceFeeManagedModel);
