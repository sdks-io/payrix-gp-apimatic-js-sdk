import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action to take when this check fails.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No action.**
 * - `1` - **Block txn, will never be processed. The Entity is sent to the manual review queue.**
 * - `3` - **Hold txn, will not be captured.**
 * - `4` - **Reserve txn, funds should be reserved.**
 * - `5` - **Block current activity, no change for merchant.**
 * - `6` - **Passed decision(s). Will not be set anywhere, will only be used for integration
 *   purposes.**
 * - `8` - **We onboard the merchant and wait for manual check later.**
 * - `manualReview` - **Schedule the automatic release of the reserve.**
 * - `approved` - **Hold txn, will not be captured. Automatic release when the associated sale is
 *   done.**
 * - `declined` - **Hold txn, will not be captured. Automatic release when the associated sale is
 *   done.**
 *
 * </details>
 */
export const VerificationRefAction2 = {
  _0: "0",
  _1: "1",
  _3: "3",
  _4: "4",
  _5: "5",
  _6: "6",
  _8: "8",
  ManualReview: "manualReview",
  Approved: "approved",
  Declined: "declined",
} as const;
export type VerificationRefAction2 =
  | (typeof VerificationRefAction2)[keyof typeof VerificationRefAction2]
  | (string & {});

export const verificationRefAction2Schema: EnumSchema<VerificationRefAction2> =
  s.enumOf<VerificationRefAction2>(VerificationRefAction2);
