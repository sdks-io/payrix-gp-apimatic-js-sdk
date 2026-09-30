import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsFundingEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsFundingEnabled = (typeof TxnsFundingEnabled)[keyof typeof TxnsFundingEnabled] | (number & {});

export const txnsFundingEnabledSchema: EnumSchema<TxnsFundingEnabled> =
  s.enumOf<TxnsFundingEnabled>(TxnsFundingEnabled);
