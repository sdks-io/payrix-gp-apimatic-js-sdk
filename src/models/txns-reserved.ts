import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsReserved = {
  _0: 0,
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _8: 8,
} as const;
export type TxnsReserved = (typeof TxnsReserved)[keyof typeof TxnsReserved] | (number & {});

export const txnsReservedSchema: EnumSchema<TxnsReserved> = s.enumOf<TxnsReserved>(TxnsReserved);
