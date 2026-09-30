import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfirmCodeType = {
  Password: "password",
  Email: "email",
} as const;
export type ConfirmCodeType = (typeof ConfirmCodeType)[keyof typeof ConfirmCodeType] | (string & {});

export const confirmCodeTypeSchema: EnumSchema<ConfirmCodeType> = s.enumOf<ConfirmCodeType>(ConfirmCodeType);
