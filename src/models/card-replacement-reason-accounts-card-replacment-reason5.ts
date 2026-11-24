import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the reason why a Prepaied card needs to be replaced.
 * * `LOST` - The card has either been lost or stolen. This will immediately disable the
 *   currently-assigned card and issue a new card with a new number. The card PIN number will be
 *   mailed to the account's shipping address.
 */
export const CardReplacementReasonAccountsCardReplacmentReason5 = {
  Lost: "LOST",
} as const;
export type CardReplacementReasonAccountsCardReplacmentReason5 =
  | (typeof CardReplacementReasonAccountsCardReplacmentReason5)[keyof typeof CardReplacementReasonAccountsCardReplacmentReason5]
  | (string & {});

export const cardReplacementReasonAccountsCardReplacmentReason5Schema: EnumSchema<CardReplacementReasonAccountsCardReplacmentReason5> =
  s.enumOf<CardReplacementReasonAccountsCardReplacmentReason5>(
    CardReplacementReasonAccountsCardReplacmentReason5,
  );
