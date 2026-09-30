import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SessionMfaAuthenticated = {
  _0: 0,
  _1: 1,
} as const;
export type SessionMfaAuthenticated =
  | (typeof SessionMfaAuthenticated)[keyof typeof SessionMfaAuthenticated]
  | (number & {});

export const sessionMfaAuthenticatedSchema: EnumSchema<SessionMfaAuthenticated> =
  s.enumOf<SessionMfaAuthenticated>(SessionMfaAuthenticated);
