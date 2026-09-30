import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Email notification to the business email when a new bank account record is created.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersBankAccountAddStopEmail2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersBankAccountAddStopEmail2 =
  | (typeof ParametersBankAccountAddStopEmail2)[keyof typeof ParametersBankAccountAddStopEmail2]
  | (number & {});

export const parametersBankAccountAddStopEmail2Schema: EnumSchema<ParametersBankAccountAddStopEmail2> =
  s.enumOf<ParametersBankAccountAddStopEmail2>(ParametersBankAccountAddStopEmail2);
