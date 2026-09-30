import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BinsTransferEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type BinsTransferEnabled =
  | (typeof BinsTransferEnabled)[keyof typeof BinsTransferEnabled]
  | (number & {});

export const binsTransferEnabledSchema: EnumSchema<BinsTransferEnabled> =
  s.enumOf<BinsTransferEnabled>(BinsTransferEnabled);
