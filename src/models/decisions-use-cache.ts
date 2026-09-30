import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionsUseCache = {
  _0: 0,
  _1: 1,
} as const;
export type DecisionsUseCache = (typeof DecisionsUseCache)[keyof typeof DecisionsUseCache] | (number & {});

export const decisionsUseCacheSchema: EnumSchema<DecisionsUseCache> =
  s.enumOf<DecisionsUseCache>(DecisionsUseCache);
