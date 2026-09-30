import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SessionPublic = {
  _0: 0,
  _1: 1,
} as const;
export type SessionPublic = (typeof SessionPublic)[keyof typeof SessionPublic] | (number & {});

export const sessionPublicSchema: EnumSchema<SessionPublic> = s.enumOf<SessionPublic>(SessionPublic);
