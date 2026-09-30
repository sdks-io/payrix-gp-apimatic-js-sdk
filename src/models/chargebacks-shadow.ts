import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebacksShadow = {
  _0: 0,
  _1: 1,
} as const;
export type ChargebacksShadow = (typeof ChargebacksShadow)[keyof typeof ChargebacksShadow] | (number & {});

export const chargebacksShadowSchema: EnumSchema<ChargebacksShadow> =
  s.enumOf<ChargebacksShadow>(ChargebacksShadow);
