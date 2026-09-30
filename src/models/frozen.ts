import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Frozen = {
  _0: 0,
  _1: 1,
} as const;
export type Frozen = (typeof Frozen)[keyof typeof Frozen] | (number & {});

export const frozenSchema: EnumSchema<Frozen> = s.enumOf<Frozen>(Frozen);
