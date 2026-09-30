import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SessionToken = {
  _0: 0,
  _1: 1,
} as const;
export type SessionToken = (typeof SessionToken)[keyof typeof SessionToken] | (number & {});

export const sessionTokenSchema: EnumSchema<SessionToken> = s.enumOf<SessionToken>(SessionToken);
