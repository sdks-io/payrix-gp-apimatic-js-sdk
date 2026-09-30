import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Allows automatic enablement of simplified deposits for new boardings and allows enablement of
 * existing boardings. Restricted to admin. Valid Values : - `1` - **Enabled**
 */
export const SimplifiedDepositEnabled2 = {
  _1: 1,
} as const;
export type SimplifiedDepositEnabled2 =
  | (typeof SimplifiedDepositEnabled2)[keyof typeof SimplifiedDepositEnabled2]
  | (number & {});

export const simplifiedDepositEnabled2Schema: EnumSchema<SimplifiedDepositEnabled2> =
  s.enumOf<SimplifiedDepositEnabled2>(SimplifiedDepositEnabled2);
