import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnPinlessDebitConversion = {
  _0: 0,
  _1: 1,
} as const;
export type TxnPinlessDebitConversion =
  | (typeof TxnPinlessDebitConversion)[keyof typeof TxnPinlessDebitConversion]
  | (number & {});

export const txnPinlessDebitConversionSchema: EnumSchema<TxnPinlessDebitConversion> =
  s.enumOf<TxnPinlessDebitConversion>(TxnPinlessDebitConversion);
