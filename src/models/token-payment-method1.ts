import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method used to make this payment.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **American Express**
 * - `2` - **Visa**
 * - `3` - **MasterCard**
 * - `4` - **Diners Club**
 * - `5` - **Discover**
 * - `6` - **PayPal**
 * - `7` - **Debit Card**
 * - `8` - **Checking Account**
 * - `9` - **Savings Account**
 * - `10` - **Corporate Checking Account**
 * - `11` - **Corporate Savings Account**
 * - `12` - **Gift Card**
 * - `13` - **EBT (Electronic Benefits Transfer) Card**
 * - `14` - **WIC (Women, Infants and Children) Card**
 * - `15` - **Accel**
 * - `16` - **ATH**
 * - `17` - **AFFN**
 * - `18` - **Culiance**
 * - `19` - **Interlink**
 * - `20` - **Jeanie**
 * - `21` - **Maestro**
 * - `22` - **NYCE**
 * - `23` - **Pulse**
 * - `24` - **Shazam**
 * - `25` - **Star**
 * - `26` - **Interac**
 * - `27` - **OmniToken**
 *
 * </details>
 */
export const TokenPaymentMethod1 = {
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
  _15: 15,
  _16: 16,
  _17: 17,
  _18: 18,
  _19: 19,
  _20: 20,
  _21: 21,
  _22: 22,
  _23: 23,
  _24: 24,
  _25: 25,
  _26: 26,
  _27: 27,
} as const;
export type TokenPaymentMethod1 =
  | (typeof TokenPaymentMethod1)[keyof typeof TokenPaymentMethod1]
  | (number & {});

export const tokenPaymentMethod1Schema: EnumSchema<TokenPaymentMethod1> =
  s.enumOf<TokenPaymentMethod1>(TokenPaymentMethod1);
