import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersPayoutDelayIncludeOffDays = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPayoutDelayIncludeOffDays =
  | (typeof ParametersPayoutDelayIncludeOffDays)[keyof typeof ParametersPayoutDelayIncludeOffDays]
  | (number & {});

export const parametersPayoutDelayIncludeOffDaysSchema: EnumSchema<ParametersPayoutDelayIncludeOffDays> =
  s.enumOf<ParametersPayoutDelayIncludeOffDays>(ParametersPayoutDelayIncludeOffDays);
