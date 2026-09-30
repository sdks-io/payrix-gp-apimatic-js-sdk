import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoginHelpersLoginAsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type LoginHelpersLoginAsEnabled =
  | (typeof LoginHelpersLoginAsEnabled)[keyof typeof LoginHelpersLoginAsEnabled]
  | (number & {});

export const loginHelpersLoginAsEnabledSchema: EnumSchema<LoginHelpersLoginAsEnabled> =
  s.enumOf<LoginHelpersLoginAsEnabled>(LoginHelpersLoginAsEnabled);
