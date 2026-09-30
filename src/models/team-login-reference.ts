import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamLoginReference = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginReference = (typeof TeamLoginReference)[keyof typeof TeamLoginReference] | (number & {});

export const teamLoginReferenceSchema: EnumSchema<TeamLoginReference> =
  s.enumOf<TeamLoginReference>(TeamLoginReference);
