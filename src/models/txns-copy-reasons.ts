import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsCopyReasons = {
  Resubmission: "resubmission",
  Reauthorization: "reauthorization",
} as const;
export type TxnsCopyReasons = (typeof TxnsCopyReasons)[keyof typeof TxnsCopyReasons] | (string & {});

export const txnsCopyReasonsSchema: EnumSchema<TxnsCopyReasons> = s.enumOf<TxnsCopyReasons>(TxnsCopyReasons);
