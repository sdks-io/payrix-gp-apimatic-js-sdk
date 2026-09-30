import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether a new Discover ID should be created.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersDiscoverAcquiredEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDiscoverAcquiredEnabled2 =
  | (typeof ParametersDiscoverAcquiredEnabled2)[keyof typeof ParametersDiscoverAcquiredEnabled2]
  | (number & {});

export const parametersDiscoverAcquiredEnabled2Schema: EnumSchema<ParametersDiscoverAcquiredEnabled2> =
  s.enumOf<ParametersDiscoverAcquiredEnabled2>(ParametersDiscoverAcquiredEnabled2);
