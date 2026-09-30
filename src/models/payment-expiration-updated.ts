import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentExpirationUpdated = {
  _0: 0,
  _1: 1,
} as const;
export type PaymentExpirationUpdated =
  | (typeof PaymentExpirationUpdated)[keyof typeof PaymentExpirationUpdated]
  | (number & {});

export const paymentExpirationUpdatedSchema: EnumSchema<PaymentExpirationUpdated> =
  s.enumOf<PaymentExpirationUpdated>(PaymentExpirationUpdated);
