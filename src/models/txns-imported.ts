import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsImported = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsImported = (typeof TxnsImported)[keyof typeof TxnsImported] | (number & {});

export const txnsImportedSchema: EnumSchema<TxnsImported> = s.enumOf<TxnsImported>(TxnsImported);
