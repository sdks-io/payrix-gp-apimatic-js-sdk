import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of payment method used for the transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No payment method specified.**
 * - `1` - **American Express.**
 * - `2` - **Visa.**
 * - `3` - **MasterCard.**
 * - `4` - **Diners Club.**
 * - `5` - **Discover.**
 * - `6` - **PayPal.**
 * - `7` - **Debit card.**
 * - `8` - **Checking account.**
 * - `9` - **Savings account.**
 * - `10` - **Corporate checking account.**
 * - `11` - **Corporate savings account.**
 * - `12` - **Gift card.**
 * - `13` - **EBT card.**
 * - `14` - **WIC card.**
 *
 * </details>
 */
export const ChargebackPaymentMethod1 = {
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
export type ChargebackPaymentMethod1 =
  | (typeof ChargebackPaymentMethod1)[keyof typeof ChargebackPaymentMethod1]
  | (number & {});

export const chargebackPaymentMethod1Schema: EnumSchema<ChargebackPaymentMethod1> =
  s.enumOf<ChargebackPaymentMethod1>(ChargebackPaymentMethod1);
