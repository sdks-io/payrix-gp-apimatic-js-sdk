import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Channel17 = {
  Cp: "CP",
  Cnp: "CNP",
} as const;
export type Channel17 = (typeof Channel17)[keyof typeof Channel17] | (string & {});

export const channel17Schema: EnumSchema<Channel17> = s.enumOf<Channel17>(Channel17);
