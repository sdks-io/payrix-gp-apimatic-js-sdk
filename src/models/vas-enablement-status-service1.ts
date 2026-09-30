import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Value Added Service to retrieve the enablement status for. Currently only 'FraudSight' is
 * supported.
 */
export const VasEnablementStatusService1 = {
  FraudSight: "fraudSight",
} as const;
export type VasEnablementStatusService1 =
  | (typeof VasEnablementStatusService1)[keyof typeof VasEnablementStatusService1]
  | (string & {});

export const vasEnablementStatusService1Schema: EnumSchema<VasEnablementStatusService1> =
  s.enumOf<VasEnablementStatusService1>(VasEnablementStatusService1);
