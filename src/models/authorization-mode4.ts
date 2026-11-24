import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthorizationMode4 = {
  Partial: "PARTIAL",
  Alternative: "ALTERNATIVE",
} as const;
export type AuthorizationMode4 = (typeof AuthorizationMode4)[keyof typeof AuthorizationMode4] | (string & {});

export const authorizationMode4Schema: EnumSchema<AuthorizationMode4> =
  s.enumOf<AuthorizationMode4>(AuthorizationMode4);
