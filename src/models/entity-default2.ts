import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this entityRef is the default one. Default entityRefs will have priority when processing
 * transactions with no MID or Platform set. <details> <summary>Valid Values</summary> - `0` - **Not
 * default.** - `1` - **Default.** </details>
 */
export const EntityDefault2 = {
  _0: 0,
  _1: 1,
} as const;
export type EntityDefault2 = (typeof EntityDefault2)[keyof typeof EntityDefault2] | (number & {});

export const entityDefault2Schema: EnumSchema<EntityDefault2> = s.enumOf<EntityDefault2>(EntityDefault2);
