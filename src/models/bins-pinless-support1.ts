import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What type of pinless charging is allowed on this debit card.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `none` - **No pinless support, PIN (Personal Identification Number) must always be provided.**
 * - `restricted` - **Some pinless support, PIN (Personal Identification Number) may not always be
 *   necessary.**
 * - `full` - **Full pinless support, PIN (Personal Identification Number) may be omitted for
 *   pinless payments.**
 *
 * </details>
 */
export const BinsPinlessSupport1 = {
  None: "none",
  Restricted: "restricted",
  Full: "full",
} as const;
export type BinsPinlessSupport1 =
  | (typeof BinsPinlessSupport1)[keyof typeof BinsPinlessSupport1]
  | (string & {});

export const binsPinlessSupport1Schema: EnumSchema<BinsPinlessSupport1> =
  s.enumOf<BinsPinlessSupport1>(BinsPinlessSupport1);
