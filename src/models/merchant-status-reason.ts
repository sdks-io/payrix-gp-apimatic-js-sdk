import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantStatusReason = {
  Rejected: "rejected",
  Fraud: "fraud",
  NoResponse: "noResponse",
  Withdrawn: "withdrawn",
} as const;
export type MerchantStatusReason =
  | (typeof MerchantStatusReason)[keyof typeof MerchantStatusReason]
  | (string & {});

export const merchantStatusReasonSchema: EnumSchema<MerchantStatusReason> =
  s.enumOf<MerchantStatusReason>(MerchantStatusReason);
