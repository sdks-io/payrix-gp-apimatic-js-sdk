import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether payment number changes.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Updated**
 * - `1` - **Updated**
 *
 * </details>
 */
export const PaymentNumberUpdatedModel2 = {
  _0: 0,
  _1: 1,
} as const;
export type PaymentNumberUpdatedModel2 =
  | (typeof PaymentNumberUpdatedModel2)[keyof typeof PaymentNumberUpdatedModel2]
  | (number & {});

export const paymentNumberUpdatedModel2Schema: EnumSchema<PaymentNumberUpdatedModel2> =
  s.enumOf<PaymentNumberUpdatedModel2>(PaymentNumberUpdatedModel2);
