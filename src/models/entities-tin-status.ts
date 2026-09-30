import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntitiesTinStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type EntitiesTinStatus = (typeof EntitiesTinStatus)[keyof typeof EntitiesTinStatus] | (number & {});

export const entitiesTinStatusSchema: EnumSchema<EntitiesTinStatus> =
  s.enumOf<EntitiesTinStatus>(EntitiesTinStatus);
