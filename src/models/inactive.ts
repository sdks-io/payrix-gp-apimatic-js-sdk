import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Inactive = {
  _0: 0,
  _1: 1,
} as const;
export type Inactive = (typeof Inactive)[keyof typeof Inactive] | (number & {});

export const inactiveSchema: EnumSchema<Inactive> = s.enumOf<Inactive>(Inactive);
