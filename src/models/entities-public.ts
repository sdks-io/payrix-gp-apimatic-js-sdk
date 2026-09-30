import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntitiesPublic = {
  _0: 0,
  _1: 1,
} as const;
export type EntitiesPublic = (typeof EntitiesPublic)[keyof typeof EntitiesPublic] | (number & {});

export const entitiesPublicSchema: EnumSchema<EntitiesPublic> = s.enumOf<EntitiesPublic>(EntitiesPublic);
