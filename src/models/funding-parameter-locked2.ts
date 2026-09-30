import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this fundingParameter is locked or not. If it is locked, then the value of this type of
 * fundingParameter will prevail.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **OFF**
 * - `1` - **ON**
 *
 * </details>
 */
export const FundingParameterLocked2 = {
  _0: 0,
  _1: 1,
} as const;
export type FundingParameterLocked2 =
  | (typeof FundingParameterLocked2)[keyof typeof FundingParameterLocked2]
  | (number & {});

export const fundingParameterLocked2Schema: EnumSchema<FundingParameterLocked2> =
  s.enumOf<FundingParameterLocked2>(FundingParameterLocked2);
