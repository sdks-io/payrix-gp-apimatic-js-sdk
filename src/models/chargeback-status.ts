import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackStatus = {
  Open: "open",
  Closed: "closed",
  Won: "won",
  Lost: "lost",
} as const;
export type ChargebackStatus = (typeof ChargebackStatus)[keyof typeof ChargebackStatus] | (string & {});

export const chargebackStatusSchema: EnumSchema<ChargebackStatus> =
  s.enumOf<ChargebackStatus>(ChargebackStatus);
