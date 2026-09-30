import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of location of this banking institution. Used in `bankAccount` type bins.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `branch` - **Branch location.**
 *   - `main` - **Main headquarters.**
 *
 * </details>
 */
export const BinLocationType1 = {
  Branch: "branch",
  Main: "main",
} as const;
export type BinLocationType1 = (typeof BinLocationType1)[keyof typeof BinLocationType1] | (string & {});

export const binLocationType1Schema: EnumSchema<BinLocationType1> =
  s.enumOf<BinLocationType1>(BinLocationType1);
