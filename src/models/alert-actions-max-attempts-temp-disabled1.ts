import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether it was temporarily disabled for reaching the maximum number of failed attempts.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Temporarily Disabled**
 * - `1` - **Temporarily Disabled**
 *
 * </details>
 */
export const AlertActionsMaxAttemptsTempDisabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type AlertActionsMaxAttemptsTempDisabled1 =
  | (typeof AlertActionsMaxAttemptsTempDisabled1)[keyof typeof AlertActionsMaxAttemptsTempDisabled1]
  | (number & {});

export const alertActionsMaxAttemptsTempDisabled1Schema: EnumSchema<AlertActionsMaxAttemptsTempDisabled1> =
  s.enumOf<AlertActionsMaxAttemptsTempDisabled1>(AlertActionsMaxAttemptsTempDisabled1);
