import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AggregationType = {
  EntityEntryEventMerchant: "entityEntryEventMerchant",
  MerchantTxnApprovedAll: "merchantTxnApprovedAll",
  MerchantTxnCapturedAll: "merchantTxnCapturedAll",
  MerchantTxnFailedAll: "merchantTxnFailedAll",
} as const;
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType] | (string & {});

export const aggregationTypeSchema: EnumSchema<AggregationType> = s.enumOf<AggregationType>(AggregationType);
