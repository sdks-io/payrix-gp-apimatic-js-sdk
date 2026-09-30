import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsDebtRepayment = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsDebtRepayment = (typeof TxnsDebtRepayment)[keyof typeof TxnsDebtRepayment] | (number & {});

export const txnsDebtRepaymentSchema: EnumSchema<TxnsDebtRepayment> =
  s.enumOf<TxnsDebtRepayment>(TxnsDebtRepayment);
