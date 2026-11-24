import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the specific action taken.
 *   * `DEBIT` - indicates the action perfomred was a transfer to another merchant.
 *   * `CREDIT` - indicates the action perfomred was a transfer to this merchant.
 */
export const TypeGetTransfersType4 = {
  Debit: "DEBIT",
  Credit: "CREDIT",
} as const;
export type TypeGetTransfersType4 =
  | (typeof TypeGetTransfersType4)[keyof typeof TypeGetTransfersType4]
  | (string & {});

export const typeGetTransfersType4Schema: EnumSchema<TypeGetTransfersType4> =
  s.enumOf<TypeGetTransfersType4>(TypeGetTransfersType4);
