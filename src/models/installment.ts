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
import { terms2Schema, type Terms2 } from "./terms2.js";

export type Installment = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific installment request. Begins with the three
   * letters, INS.
   */
  id?: string;
  /** A unique identifier used to identify the installment plan. */
  reference?: string;
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
  terms?: Terms2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const installmentProperties: s.Shape<Installment> = {
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  program: s.optional(s.lazy(() => programTransactionsInstallmentProgramSchema)),
  mode: s.optional(s.lazy(() => modeTransactionsInstallmentModeSchema)),
  count: s.optional(s.string()),
  gracePeriodCount: s.optional(s.string()),
  terms: s.optional(s.lazy(() => terms2Schema)),
  _keysMap: {
    gracePeriodCount: "grace_period_count",
  },
};

export const installmentInternalSchema: Schema<Installment> = s.object<Installment>(installmentProperties, {
  additionalProperties: s.json(),
});

export const installmentSchema: Schema<Installment> = s.lazySchema(() =>
  s.object<Installment>(
    {
      ...installmentProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
