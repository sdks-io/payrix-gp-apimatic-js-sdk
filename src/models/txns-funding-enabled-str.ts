import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsFundingEnabledStr = {
  _0: "0",
  _1: "1",
} as const;
export type TxnsFundingEnabledStr =
  | (typeof TxnsFundingEnabledStr)[keyof typeof TxnsFundingEnabledStr]
  | (string & {});

export const txnsFundingEnabledStrSchema: EnumSchema<TxnsFundingEnabledStr> =
  s.enumOf<TxnsFundingEnabledStr>(TxnsFundingEnabledStr);
