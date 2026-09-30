import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SessionSso = {
  _0: 0,
  _1: 1,
} as const;
export type SessionSso = (typeof SessionSso)[keyof typeof SessionSso] | (number & {});

export const sessionSsoSchema: EnumSchema<SessionSso> = s.enumOf<SessionSso>(SessionSso);
