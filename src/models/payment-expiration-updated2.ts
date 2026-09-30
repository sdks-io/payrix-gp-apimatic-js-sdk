import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether token expiration date changes.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Updated**
 * - `1` - **Updated**
 *
 * </details>
 */
export const PaymentExpirationUpdated2 = {
  _0: 0,
  _1: 1,
} as const;
export type PaymentExpirationUpdated2 =
  | (typeof PaymentExpirationUpdated2)[keyof typeof PaymentExpirationUpdated2]
  | (number & {});

export const paymentExpirationUpdated2Schema: EnumSchema<PaymentExpirationUpdated2> =
  s.enumOf<PaymentExpirationUpdated2>(PaymentExpirationUpdated2);
