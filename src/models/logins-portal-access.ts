import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoginsPortalAccess = {
  _0: 0,
  _1: 1,
} as const;
export type LoginsPortalAccess = (typeof LoginsPortalAccess)[keyof typeof LoginsPortalAccess] | (number & {});

export const loginsPortalAccessSchema: EnumSchema<LoginsPortalAccess> =
  s.enumOf<LoginsPortalAccess>(LoginsPortalAccess);
