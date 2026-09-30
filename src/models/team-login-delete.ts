import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamLoginDelete = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginDelete = (typeof TeamLoginDelete)[keyof typeof TeamLoginDelete] | (number & {});

export const teamLoginDeleteSchema: EnumSchema<TeamLoginDelete> = s.enumOf<TeamLoginDelete>(TeamLoginDelete);
