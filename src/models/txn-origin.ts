import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnOrigin = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
} as const;
export type TxnOrigin = (typeof TxnOrigin)[keyof typeof TxnOrigin] | (number & {});

export const txnOriginSchema: EnumSchema<TxnOrigin> = s.enumOf<TxnOrigin>(TxnOrigin);
