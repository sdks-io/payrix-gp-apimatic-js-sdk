import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates the batch close method for this merchant applicable to Express platform.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `TimeInitiated` - **Batch close occurs at specific time intervals (Automated).**
 * - `MerchantInitiated` - **Batch close occurs when initiated by the Merchant (Manual).**
 *
 * </details>
 */
export const MerchantsExpressBatchCloseMethod1 = {
  TimeInitiated: "TimeInitiated",
  MerchantInitiated: "MerchantInitiated",
} as const;
export type MerchantsExpressBatchCloseMethod1 =
  | (typeof MerchantsExpressBatchCloseMethod1)[keyof typeof MerchantsExpressBatchCloseMethod1]
  | (string & {});

export const merchantsExpressBatchCloseMethod1Schema: EnumSchema<MerchantsExpressBatchCloseMethod1> =
  s.enumOf<MerchantsExpressBatchCloseMethod1>(MerchantsExpressBatchCloseMethod1);
