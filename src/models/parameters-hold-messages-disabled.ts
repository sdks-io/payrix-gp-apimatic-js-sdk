import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersHoldMessagesDisabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersHoldMessagesDisabled =
  | (typeof ParametersHoldMessagesDisabled)[keyof typeof ParametersHoldMessagesDisabled]
  | (number & {});

export const parametersHoldMessagesDisabledSchema: EnumSchema<ParametersHoldMessagesDisabled> =
  s.enumOf<ParametersHoldMessagesDisabled>(ParametersHoldMessagesDisabled);
