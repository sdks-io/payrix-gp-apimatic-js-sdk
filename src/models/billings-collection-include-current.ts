import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingsCollectionIncludeCurrent = {
  _0: 0,
  _1: 1,
} as const;
export type BillingsCollectionIncludeCurrent =
  | (typeof BillingsCollectionIncludeCurrent)[keyof typeof BillingsCollectionIncludeCurrent]
  | (number & {});

export const billingsCollectionIncludeCurrentSchema: EnumSchema<BillingsCollectionIncludeCurrent> =
  s.enumOf<BillingsCollectionIncludeCurrent>(BillingsCollectionIncludeCurrent);
