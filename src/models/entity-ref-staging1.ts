import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Allows a merchant to transact under the Staging environment while boarding is in progress, and
 * allows for configuration with valid values such as **Disabled** or **Enabled**.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const EntityRefStaging1 = {
  _0: 0,
  _1: 1,
} as const;
export type EntityRefStaging1 = (typeof EntityRefStaging1)[keyof typeof EntityRefStaging1] | (number & {});

export const entityRefStaging1Schema: EnumSchema<EntityRefStaging1> =
  s.enumOf<EntityRefStaging1>(EntityRefStaging1);
