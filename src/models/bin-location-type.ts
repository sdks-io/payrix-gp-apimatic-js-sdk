import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BinLocationType = {
  Branch: "branch",
  Main: "main",
} as const;
export type BinLocationType = (typeof BinLocationType)[keyof typeof BinLocationType] | (string & {});

export const binLocationTypeSchema: EnumSchema<BinLocationType> = s.enumOf<BinLocationType>(BinLocationType);
