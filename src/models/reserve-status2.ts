import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of reserve. <details> <summary>Valid Values</summary>
 * - `1` - **The reserve is active.**
 * - `2` - **The reserve is under review.**
 * - `3` - **The reserve is inactive.** </details>
 */
export const ReserveStatus2 = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type ReserveStatus2 = (typeof ReserveStatus2)[keyof typeof ReserveStatus2] | (number & {});

export const reserveStatus2Schema: EnumSchema<ReserveStatus2> = s.enumOf<ReserveStatus2>(ReserveStatus2);
