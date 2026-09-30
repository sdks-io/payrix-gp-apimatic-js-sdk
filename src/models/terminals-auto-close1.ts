import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If the terminal should be manually or automatically closed for the day.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Automatic**
 * - `1` - **Manual**
 * - `2` - **None**
 *
 * </details>
 */
export const TerminalsAutoClose1 = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type TerminalsAutoClose1 =
  | (typeof TerminalsAutoClose1)[keyof typeof TerminalsAutoClose1]
  | (number & {});

export const terminalsAutoClose1Schema: EnumSchema<TerminalsAutoClose1> =
  s.enumOf<TerminalsAutoClose1>(TerminalsAutoClose1);
