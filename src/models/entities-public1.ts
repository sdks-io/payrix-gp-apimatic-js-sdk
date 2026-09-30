import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether this is a publicly held entity.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Private entity**
 * - `1` - **Public entity**
 *
 * </details>
 */
export const EntitiesPublic1 = {
  _0: 0,
  _1: 1,
} as const;
export type EntitiesPublic1 = (typeof EntitiesPublic1)[keyof typeof EntitiesPublic1] | (number & {});

export const entitiesPublic1Schema: EnumSchema<EntitiesPublic1> = s.enumOf<EntitiesPublic1>(EntitiesPublic1);
