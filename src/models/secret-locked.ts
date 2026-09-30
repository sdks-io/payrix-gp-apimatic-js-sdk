import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SecretLocked = {
  _0: 0,
  _1: 1,
} as const;
export type SecretLocked = (typeof SecretLocked)[keyof typeof SecretLocked] | (number & {});

export const secretLockedSchema: EnumSchema<SecretLocked> = s.enumOf<SecretLocked>(SecretLocked);
