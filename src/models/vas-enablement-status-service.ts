import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasEnablementStatusService = {
  FraudSight: "fraudSight",
} as const;
export type VasEnablementStatusService =
  | (typeof VasEnablementStatusService)[keyof typeof VasEnablementStatusService]
  | (string & {});

export const vasEnablementStatusServiceSchema: EnumSchema<VasEnablementStatusService> =
  s.enumOf<VasEnablementStatusService>(VasEnablementStatusService);
