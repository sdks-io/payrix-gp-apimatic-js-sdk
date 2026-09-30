import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoginsMfaEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type LoginsMfaEnabled = (typeof LoginsMfaEnabled)[keyof typeof LoginsMfaEnabled] | (number & {});

export const loginsMfaEnabledSchema: EnumSchema<LoginsMfaEnabled> =
  s.enumOf<LoginsMfaEnabled>(LoginsMfaEnabled);
