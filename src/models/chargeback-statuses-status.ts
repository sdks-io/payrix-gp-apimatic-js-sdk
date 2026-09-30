import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackStatusesStatus = {
  Open: "open",
  Closed: "closed",
  Won: "won",
  Lost: "lost",
} as const;
export type ChargebackStatusesStatus =
  | (typeof ChargebackStatusesStatus)[keyof typeof ChargebackStatusesStatus]
  | (string & {});

export const chargebackStatusesStatusSchema: EnumSchema<ChargebackStatusesStatus> =
  s.enumOf<ChargebackStatusesStatus>(ChargebackStatusesStatus);
