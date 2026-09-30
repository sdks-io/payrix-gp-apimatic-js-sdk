import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatementEntriesDeductedFromBalance = {
  _0: 0,
  _1: 1,
} as const;
export type StatementEntriesDeductedFromBalance =
  | (typeof StatementEntriesDeductedFromBalance)[keyof typeof StatementEntriesDeductedFromBalance]
  | (number & {});

export const statementEntriesDeductedFromBalanceSchema: EnumSchema<StatementEntriesDeductedFromBalance> =
  s.enumOf<StatementEntriesDeductedFromBalance>(StatementEntriesDeductedFromBalance);
