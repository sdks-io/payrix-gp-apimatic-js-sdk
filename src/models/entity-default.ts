import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityDefault = {
  _0: 0,
  _1: 1,
} as const;
export type EntityDefault = (typeof EntityDefault)[keyof typeof EntityDefault] | (number & {});

export const entityDefaultSchema: EnumSchema<EntityDefault> = s.enumOf<EntityDefault>(EntityDefault);
