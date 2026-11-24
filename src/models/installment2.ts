import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modeTransactionsInstallmentModeSchema,
  type ModeTransactionsInstallmentMode,
} from "./mode-transactions-installment-mode.js";
import {
  programTransactionsInstallmentProgramSchema,
  type ProgramTransactionsInstallmentProgram,
} from "./program-transactions-installment-program.js";

export type Installment2 = {
  /** The installment payment plan program. */
  program?: ProgramTransactionsInstallmentProgram;
  /** This is the type of Installment Plan. */
  mode?: ModeTransactionsInstallmentMode;
  /**
   * Indicates the total number of payments to be made over the course of the installment payment
   * plan.
   */
  count?: string;
  /**
   * The grace period before the first payment. 00 indicates no grace period. This field is
   * available to Mexico merchants only.
   */
  gracePeriodCount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const installment2Schema: Schema<Installment2> = s.object<Installment2>(
  {
    program: s.optional(s.lazy(() => programTransactionsInstallmentProgramSchema)),
    mode: s.optional(s.lazy(() => modeTransactionsInstallmentModeSchema)),
    count: s.optional(s.string()),
    gracePeriodCount: s.optional(s.string()),
    _keysMap: {
      gracePeriodCount: "grace_period_count",
    },
  },
  { additionalProperties: s.json() },
);
