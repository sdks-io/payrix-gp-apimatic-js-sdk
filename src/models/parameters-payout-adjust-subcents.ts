import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersPayoutAdjustSubcents = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPayoutAdjustSubcents =
  | (typeof ParametersPayoutAdjustSubcents)[keyof typeof ParametersPayoutAdjustSubcents]
  | (number & {});

export const parametersPayoutAdjustSubcentsSchema: EnumSchema<ParametersPayoutAdjustSubcents> =
  s.enumOf<ParametersPayoutAdjustSubcents>(ParametersPayoutAdjustSubcents);
