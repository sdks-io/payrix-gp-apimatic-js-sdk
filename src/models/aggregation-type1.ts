import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of aggregation. This will automatically set the search and total values.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `entityEntryEventMerchant` - **A merchant entry.**
 * - `merchantTxnApprovedAll` - **All merchant transactions approved.**
 * - `merchantTxnCapturedAll` - **All merchant transactions captured.**
 * - `merchantTxnFailedAll` - **All merchant transactions failed.**
 *
 * </details>
 */
export const AggregationType1 = {
  EntityEntryEventMerchant: "entityEntryEventMerchant",
  MerchantTxnApprovedAll: "merchantTxnApprovedAll",
  MerchantTxnCapturedAll: "merchantTxnCapturedAll",
  MerchantTxnFailedAll: "merchantTxnFailedAll",
} as const;
export type AggregationType1 = (typeof AggregationType1)[keyof typeof AggregationType1] | (string & {});

export const aggregationType1Schema: EnumSchema<AggregationType1> =
  s.enumOf<AggregationType1>(AggregationType1);
