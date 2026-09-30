import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersDebtRepaymentEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDebtRepaymentEnabled =
  | (typeof ParametersDebtRepaymentEnabled)[keyof typeof ParametersDebtRepaymentEnabled]
  | (number & {});

export const parametersDebtRepaymentEnabledSchema: EnumSchema<ParametersDebtRepaymentEnabled> =
  s.enumOf<ParametersDebtRepaymentEnabled>(ParametersDebtRepaymentEnabled);
