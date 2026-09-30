import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersVerifyForPayoutNotRequired = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVerifyForPayoutNotRequired =
  | (typeof ParametersVerifyForPayoutNotRequired)[keyof typeof ParametersVerifyForPayoutNotRequired]
  | (number & {});

export const parametersVerifyForPayoutNotRequiredSchema: EnumSchema<ParametersVerifyForPayoutNotRequired> =
  s.enumOf<ParametersVerifyForPayoutNotRequired>(ParametersVerifyForPayoutNotRequired);
