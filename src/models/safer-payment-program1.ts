import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field contains the program type of the saferPayments.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `basic` - **Basic**
 * - `managed` - **Managed**
 *
 * </details>
 */
export const SaferPaymentProgram1 = {
  Basic: "basic",
  Managed: "managed",
} as const;
export type SaferPaymentProgram1 =
  | (typeof SaferPaymentProgram1)[keyof typeof SaferPaymentProgram1]
  | (string & {});

export const saferPaymentProgram1Schema: EnumSchema<SaferPaymentProgram1> =
  s.enumOf<SaferPaymentProgram1>(SaferPaymentProgram1);
