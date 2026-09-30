import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Account Updater is enabled and states which platform it will use to send
 * the payment update files. The default setting is 0 (Not Enabled)
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **Not Enabled**
 *   - `1` - **Enabled for VAP AU.**
 *   - `2` - **Enabled for VCORE AU.**
 *
 * </details>
 */
export const ParametersAccountUpdaterEnabled2 = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type ParametersAccountUpdaterEnabled2 =
  | (typeof ParametersAccountUpdaterEnabled2)[keyof typeof ParametersAccountUpdaterEnabled2]
  | (number & {});

export const parametersAccountUpdaterEnabled2Schema: EnumSchema<ParametersAccountUpdaterEnabled2> =
  s.enumOf<ParametersAccountUpdaterEnabled2>(ParametersAccountUpdaterEnabled2);
