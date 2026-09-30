import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamLoginCreate = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginCreate = (typeof TeamLoginCreate)[keyof typeof TeamLoginCreate] | (number & {});

export const teamLoginCreateSchema: EnumSchema<TeamLoginCreate> = s.enumOf<TeamLoginCreate>(TeamLoginCreate);
