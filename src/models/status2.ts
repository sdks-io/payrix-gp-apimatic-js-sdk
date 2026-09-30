import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of this merchant platform.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Pending.**
 * - `1` - **Approved.**
 * - `2` - **Failed.**
 *
 * </details>
 */
export const Status2 = {
  _0: "0",
  _1: "1",
  _2: "2",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
