import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SaferPaymentProgram = {
  Basic: "basic",
  Managed: "managed",
} as const;
export type SaferPaymentProgram =
  | (typeof SaferPaymentProgram)[keyof typeof SaferPaymentProgram]
  | (string & {});

export const saferPaymentProgramSchema: EnumSchema<SaferPaymentProgram> =
  s.enumOf<SaferPaymentProgram>(SaferPaymentProgram);
