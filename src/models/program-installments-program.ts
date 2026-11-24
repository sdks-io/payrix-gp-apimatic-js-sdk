import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates the installment program the merchant is participating in.
 *    * `VIS` - Visa Installments
 */
export const ProgramInstallmentsProgram = {
  Vis: "VIS",
} as const;
export type ProgramInstallmentsProgram =
  | (typeof ProgramInstallmentsProgram)[keyof typeof ProgramInstallmentsProgram]
  | (string & {});

export const programInstallmentsProgramSchema: EnumSchema<ProgramInstallmentsProgram> =
  s.enumOf<ProgramInstallmentsProgram>(ProgramInstallmentsProgram);
