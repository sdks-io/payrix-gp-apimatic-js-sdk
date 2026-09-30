import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersNegativeBalanceEmail = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersNegativeBalanceEmail =
  | (typeof ParametersNegativeBalanceEmail)[keyof typeof ParametersNegativeBalanceEmail]
  | (number & {});

export const parametersNegativeBalanceEmailSchema: EnumSchema<ParametersNegativeBalanceEmail> =
  s.enumOf<ParametersNegativeBalanceEmail>(ParametersNegativeBalanceEmail);
