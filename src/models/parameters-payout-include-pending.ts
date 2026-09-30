import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersPayoutIncludePending = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPayoutIncludePending =
  | (typeof ParametersPayoutIncludePending)[keyof typeof ParametersPayoutIncludePending]
  | (number & {});

export const parametersPayoutIncludePendingSchema: EnumSchema<ParametersPayoutIncludePending> =
  s.enumOf<ParametersPayoutIncludePending>(ParametersPayoutIncludePending);
