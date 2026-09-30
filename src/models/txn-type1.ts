import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Credit Card Only: Sale Transaction.** Processes a sale and charges the customer.
 * - `2` - **Credit Card Only: Auth Transaction.** Authorizes and holds the requested total on the
 *   credit card.
 * - `3` - **Credit Card Only: Capture Transaction.** Finalizes a prior Auth Transaction and charges
 *   the customer.
 * - `4` - **Credit Card Only: Reverse Authorization.** Reverses a prior Auth or Sale Transaction
 *   and releases the credit hold.
 * - `5` - **Credit Card Only: Refund Transaction.** Refunds a prior Capture or Sale Transaction
 *   (total may be specified for a partial refund).
 * - `7` - **Echeck Only: Echeck Sale Transaction.** Sale Transaction for ECheck payment.
 * - `8` - **Echeck Only: Echeck Refund Transaction.** Refund Transaction for prior ECheck Sale
 *   Transaction.
 * - `11` - **Echeck Only: Echeck Redeposit Transaction.** Attempt to redeposit a prior failed
 *   eCheck Sale Transaction.
 * - `12` - **Echeck Only: Echeck Account Verification Transaction.** Attempt to verify eCheck
 *   payment details.
 * - `14` - **Incremental Authorization.**
 *
 * </details>
 */
export const TxnType1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _7: 7,
  _8: 8,
  _11: 11,
  _12: 12,
  _14: 14,
} as const;
export type TxnType1 = (typeof TxnType1)[keyof typeof TxnType1] | (number & {});

export const txnType1Schema: EnumSchema<TxnType1> = s.enumOf<TxnType1>(TxnType1);
