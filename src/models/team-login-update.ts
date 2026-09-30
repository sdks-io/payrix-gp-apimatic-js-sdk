import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamLoginUpdate = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginUpdate = (typeof TeamLoginUpdate)[keyof typeof TeamLoginUpdate] | (number & {});

export const teamLoginUpdateSchema: EnumSchema<TeamLoginUpdate> = s.enumOf<TeamLoginUpdate>(TeamLoginUpdate);
