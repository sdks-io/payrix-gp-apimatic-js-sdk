import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Will dictate whether a login will have portal access or not by default.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersPortalAccessEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPortalAccessEnabled2 =
  | (typeof ParametersPortalAccessEnabled2)[keyof typeof ParametersPortalAccessEnabled2]
  | (number & {});

export const parametersPortalAccessEnabled2Schema: EnumSchema<ParametersPortalAccessEnabled2> =
  s.enumOf<ParametersPortalAccessEnabled2>(ParametersPortalAccessEnabled2);
