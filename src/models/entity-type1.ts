import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of Entity.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Sole Proprietorship**
 * - `1` - **Corporation**
 * - `2` - **Limited Liability Company**
 * - `3` - **Partnership**
 * - `4` - **Association**
 * - `5` - **Non-Profit Organization**
 * - `6` - **Government Organization**
 * - `7` - **C Corporation**
 * - `8` - **S Corporation**
 *
 * </details>
 */
export const EntityType1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
} as const;
export type EntityType1 = (typeof EntityType1)[keyof typeof EntityType1] | (number & {});

export const entityType1Schema: EnumSchema<EntityType1> = s.enumOf<EntityType1>(EntityType1);
