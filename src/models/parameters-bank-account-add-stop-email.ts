import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersBankAccountAddStopEmail = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersBankAccountAddStopEmail =
  | (typeof ParametersBankAccountAddStopEmail)[keyof typeof ParametersBankAccountAddStopEmail]
  | (number & {});

export const parametersBankAccountAddStopEmailSchema: EnumSchema<ParametersBankAccountAddStopEmail> =
  s.enumOf<ParametersBankAccountAddStopEmail>(ParametersBankAccountAddStopEmail);
