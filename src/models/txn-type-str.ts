import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnTypeStr = {
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
  _5: "5",
  _7: "7",
  _8: "8",
  _11: "11",
  _12: "12",
  _14: "14",
} as const;
export type TxnTypeStr = (typeof TxnTypeStr)[keyof typeof TxnTypeStr] | (string & {});

export const txnTypeStrSchema: EnumSchema<TxnTypeStr> = s.enumOf<TxnTypeStr>(TxnTypeStr);
