import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthorizationMode1 = {
  Partial: "PARTIAL",
} as const;
export type AuthorizationMode1 = (typeof AuthorizationMode1)[keyof typeof AuthorizationMode1] | (string & {});

export const authorizationMode1Schema: EnumSchema<AuthorizationMode1> =
  s.enumOf<AuthorizationMode1>(AuthorizationMode1);
