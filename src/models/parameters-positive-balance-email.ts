import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersPositiveBalanceEmail = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPositiveBalanceEmail =
  | (typeof ParametersPositiveBalanceEmail)[keyof typeof ParametersPositiveBalanceEmail]
  | (number & {});

export const parametersPositiveBalanceEmailSchema: EnumSchema<ParametersPositiveBalanceEmail> =
  s.enumOf<ParametersPositiveBalanceEmail>(ParametersPositiveBalanceEmail);
