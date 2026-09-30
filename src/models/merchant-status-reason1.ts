import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for manual or closure status.
 *
 * <details> <summary>Valid Values</summary>
 *
 * `rejected` - **Merchant account rejected for servicing.**
 *
 * `fraud` - **Merchant or submission was determined to be fraudulent.**
 *
 * `noResponse` - **No response given in expected time frame for verification/validation inquiry.**
 *
 * `withdrawn` - **Merchant submission withdrawn.**
 *
 *
 * </details>
 */
export const MerchantStatusReason1 = {
  Rejected: "rejected",
  Fraud: "fraud",
  NoResponse: "noResponse",
  Withdrawn: "withdrawn",
} as const;
export type MerchantStatusReason1 =
  | (typeof MerchantStatusReason1)[keyof typeof MerchantStatusReason1]
  | (string & {});

export const merchantStatusReason1Schema: EnumSchema<MerchantStatusReason1> =
  s.enumOf<MerchantStatusReason1>(MerchantStatusReason1);
