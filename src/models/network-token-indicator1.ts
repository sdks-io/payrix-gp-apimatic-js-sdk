import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if a transaction qualified for a network token through Network Payment Manager.
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **No**
 *   - `1` - **Yes** </details>
 */
export const NetworkTokenIndicator1 = {
  _0: 0,
  _1: 1,
} as const;
export type NetworkTokenIndicator1 =
  | (typeof NetworkTokenIndicator1)[keyof typeof NetworkTokenIndicator1]
  | (number & {});

export const networkTokenIndicator1Schema: EnumSchema<NetworkTokenIndicator1> =
  s.enumOf<NetworkTokenIndicator1>(NetworkTokenIndicator1);
