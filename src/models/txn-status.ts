import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type TxnStatus = (typeof TxnStatus)[keyof typeof TxnStatus] | (number & {});

export const txnStatusSchema: EnumSchema<TxnStatus> = s.enumOf<TxnStatus>(TxnStatus);
