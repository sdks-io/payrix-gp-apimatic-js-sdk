import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamLoginRead = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginRead = (typeof TeamLoginRead)[keyof typeof TeamLoginRead] | (number & {});

export const teamLoginReadSchema: EnumSchema<TeamLoginRead> = s.enumOf<TeamLoginRead>(TeamLoginRead);
