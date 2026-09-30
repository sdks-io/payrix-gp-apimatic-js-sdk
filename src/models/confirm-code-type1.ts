import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this confirmCode.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `password` - **Forgot Password**
 * - `email` - **Verify Email**
 *
 * </details>
 */
export const ConfirmCodeType1 = {
  Password: "password",
  Email: "email",
} as const;
export type ConfirmCodeType1 = (typeof ConfirmCodeType1)[keyof typeof ConfirmCodeType1] | (string & {});

export const confirmCodeType1Schema: EnumSchema<ConfirmCodeType1> =
  s.enumOf<ConfirmCodeType1>(ConfirmCodeType1);
