import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsMisused = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsMisused = (typeof TxnsMisused)[keyof typeof TxnsMisused] | (number & {});

export const txnsMisusedSchema: EnumSchema<TxnsMisused> = s.enumOf<TxnsMisused>(TxnsMisused);
