import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The installment payment plan program. */
export const ProgramTransactionsInstallmentProgram = {
  Vis: "VIS",
} as const;
export type ProgramTransactionsInstallmentProgram =
  | (typeof ProgramTransactionsInstallmentProgram)[keyof typeof ProgramTransactionsInstallmentProgram]
  | (string & {});

export const programTransactionsInstallmentProgramSchema: EnumSchema<ProgramTransactionsInstallmentProgram> =
  s.enumOf<ProgramTransactionsInstallmentProgram>(ProgramTransactionsInstallmentProgram);
