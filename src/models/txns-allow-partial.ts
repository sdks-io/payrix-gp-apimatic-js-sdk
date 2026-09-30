import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsAllowPartial = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsAllowPartial = (typeof TxnsAllowPartial)[keyof typeof TxnsAllowPartial] | (number & {});

export const txnsAllowPartialSchema: EnumSchema<TxnsAllowPartial> =
  s.enumOf<TxnsAllowPartial>(TxnsAllowPartial);
