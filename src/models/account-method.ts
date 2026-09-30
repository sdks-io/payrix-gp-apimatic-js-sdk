import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountMethod = {
  _8: 8,
  _9: 9,
  _10: 10,
  _11: 11,
} as const;
export type AccountMethod = (typeof AccountMethod)[keyof typeof AccountMethod] | (number & {});

export const accountMethodSchema: EnumSchema<AccountMethod> = s.enumOf<AccountMethod>(AccountMethod);
