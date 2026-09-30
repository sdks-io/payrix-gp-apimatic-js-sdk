import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackPaymentMethod = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
  _11: 11,
  _12: 12,
  _13: 13,
  _14: 14,
} as const;
export type ChargebackPaymentMethod =
  | (typeof ChargebackPaymentMethod)[keyof typeof ChargebackPaymentMethod]
  | (number & {});

export const chargebackPaymentMethodSchema: EnumSchema<ChargebackPaymentMethod> =
  s.enumOf<ChargebackPaymentMethod>(ChargebackPaymentMethod);
